(ns rgm.web-server
  "Ring/jetty web server."
  (:require [applied-science.darkstar   :as darkstar]
            [com.stuartsierra.component :as component]
            [muuntaja.middleware        :as muuntaja]
            [hiccup.page]
            [hiccup2.core                :as h]
            [reitit.ring                :as rr]
            [ring.adapter.jetty]
            [ring.util.io]
            [ring.util.response         :as response]
            [rgm.chrome]
            [taoensso.timbre            :as timbre]))

(defn Layout []
  (h/html
   (hiccup.page/doctype :html5)
   [:html {:lang "en"}
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
     [:title "Testpage"]
     [:link {:href "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
             :rel "stylesheet"
             :type "text/css"}]
     [:style {:type "text/css"} "@media print {.print\\:hidden { display: none; }}"]]
    [:body.container.mx-auto
     [:h1.font-bold.text-2xl.mb-3 "content outside react"]
     [:a.print:hidden.border.rounded.px-3.py-2.my-8
      {:href "/print"} "Save PDF"]
     [:div#app "spa is booting"]
     [:script {:src "https://cdn.jsdelivr.net/npm/vega@5"}]
     [:script {:src "/assets/app/js/main.js"}]
     [:script {:charset "utf-8"} "rgm.app.start();"]]]))

(defn host-page-handler [_req]
  (-> (Layout)
      (str)
      (response/response)
      (assoc-in [:headers "Content-Type"] "text/html; charset=utf-8")))

(defn- get-url [request]
  (case (:uri request)
    "http://host.docker.internal:4000/"))

(defn print-handler [chrome request]
  (let [url (get-url request)
        render-fn (fn [output-stream]
                    (rgm.chrome/render-pdf chrome url output-stream))]
    (-> (ring.util.io/piped-input-stream render-fn)
        (response/response)
        (assoc-in [:headers "Content-Type"] "application/pdf")
        ;; so we don't need to supply content-length; we don't actually know it yet
        (assoc-in [:headers "Content-Transfer-Encoding"] "chunked")
        ;; uncomment below to save to disk instead of showing inline
        #_(assoc-in [:headers "Content-Disposition"] "attachment;filename=\"testpage.pdf\""))))

(defn make-router [chrome]
  (rr/router
   [["/"      {:handler host-page-handler}]
    ["/print" {:handler (partial print-handler chrome)}]]))

(def default-handler
  (rr/routes
   (rr/redirect-trailing-slash-handler {:method :strip})
   ;; test page at / aka index.html comes from the resource handler
   (rr/create-resource-handler {:path "/"})
   (rr/create-default-handler {:not-found (constantly 404)})))

(defn make-app [router]
  (rr/ring-handler
   router default-handler {:middleware [muuntaja/wrap-format]}))

(defrecord WebServer [port chrome]
  component/Lifecycle
  (start [this]
    (timbre/info "starting web server on port" port)
    (let [router (make-router chrome)
          app    (make-app router)
          server (ring.adapter.jetty/run-jetty
                  app {:port port :join? false})]
      (assoc this :server server)))
  (stop [this]
    (timbre/info "stopping web server")
    (.stop (:server this))))

(defn new-web-server [port] (map->WebServer {:port port}))
