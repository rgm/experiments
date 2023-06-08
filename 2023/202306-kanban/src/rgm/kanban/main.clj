(ns rgm.kanban.main
  (:require
   [datascript.core            :as d]
   [clojure.java.io            :as io]
   [cljs.build.api             :as build]
   [integrant.core             :as ig]
   [lambdaisland.hiccup        :as h]
   [reitit.ring                :as rtr]
   [ring.adapter.jetty         :as jetty]
   [ring.middleware.stacktrace :as stacktrace]
   [ring.util.response         :as res]
   [tailwind-hiccup.core       :refer [tw]]))

(defn build-cljs
  ([]
   (build-cljs :simple))
  ([optimizations]
   (build/build
    (build/inputs "src")
    {:asset-path "cljs"
     :main 'rgm.kanban.app
     :optimizations optimizations
     :output-dir "target/cljs"
     :output-to "resources/public/app.js"
     :infer-externs true
     :verbose true})))

(comment
  (build-cljs)
  (build-cljs :advanced))

(defn htmx-test [req]
  (res/response (h/render [:div "clicked"] {:doctype? false})))

(defn Root [ctx]
  [:<>
   [:div#parent-div
    [:button (tw [:border :border-black :px-3 :py-2]
                 {:hx-post "/clicked"
                  :hx-trigger "click"
                  :hx-target "#parent-div"
                  :hx-swap "outerHTML"}) "click me"]]
   [:div (tw [:w-full :grid :grid-cols-3 :gap-4 :p-4])
    [:form.sortable (tw [] {:hx-post "/items" :hx-trigger "end"})
     [:div.htmx-indicator "Updating"]
     [:div (tw [:my-2 :py-2 :w-full :border]) [:input {:type "hidden" :name "item" :value "1"}] "1"]
     [:div (tw [:my-2 :py-2 :w-full :border]) [:input {:type "hidden" :name "item" :value "2"}] "2"]
     [:div (tw [:my-2 :py-2 :w-full :border]) [:input {:type "hidden" :name "item" :value "3"}] "3"]
     [:div (tw [:my-2 :py-2 :w-full :border]) [:input {:type "hidden" :name "item" :value "4"}] "4"]]]])

(defn DefaultLayout
  [ctx body-fn]
  (h/render
   [:html {:lang "en"}
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
     [:title "kanban"]
     [:script {:src "/htmx.min.js"}]
     [:script {:src "/Sortable.min.js"}]
     [:script {:src "https://cdn.tailwindcss.com"}]
     [:script {:src "/app.js"}]
     [:link {:rel "stylesheet" :href "/styles.css"}]
     ]
    [:body {:style {}} [:div (tw []) (body-fn ctx)]]]))

(defn make-ctx
  "Extract a common template context from a request."
  [req]
  (let [current-user (get-in req [:session :identity])]
    {:current-user       current-user
     :profile            (:profile req)
     :errors             (-> req :flash :errors)
     :messages           (-> req :flash :messages)
     :reitit.core/router (:reitit.core/router req)
     :route-name         (get-in req [:reitit.core/match :data :name])
     :params             (get req :params)}))

(defn render
  "Render a hiccup fn into a string, using the default layout."
  [context-map hiccup-fn]
  (str (DefaultLayout context-map hiccup-fn)))

(defn root-handler [req]
  (let [ctx (make-ctx req)]
    (-> (render ctx Root)
        (res/response))))

(defmethod ig/init-key ::datastore
  [_ _]
  {:conn (d/create-conn {:aka {:db/cardinality :db.cardinality/many}})})

(defmethod ig/init-key ::router
  [_ {:keys [store profile]}]
  (let [middleware-stack [stacktrace/wrap-stacktrace]]
    (rtr/router
     [["/" {:get (fn [req] (root-handler req))}]
      ["/clicked" {:post (fn [req] (htmx-test req))}]]
     {:data {:middleware middleware-stack}})))

(def config
  {::datastore {}
   ::router   {:store (ig/ref ::datastore)
               :profile (or (System/getenv "RGM_RING_PROFILE") "prd")}
   ::handler  {:router (ig/ref ::router)}
   ::jetty    {:port (parse-long (or (System/getenv "PORT") "3000"))
               :handler (ig/ref ::handler)}})

; (ig/load-namespaces config)

(defmethod ig/init-key ::handler
  [_ {router :router}]
  (let [default-handler (rtr/routes
                         (rtr/redirect-trailing-slash-handler)
                         (rtr/create-resource-handler {:path "/"})
                         (rtr/create-default-handler))]
    (rtr/ring-handler router default-handler)))

(defmethod ig/init-key ::jetty
  [_ {handler :handler :as opts}]
  (let [opts (-> opts (dissoc :handler) (assoc :join? false))]
    (jetty/run-jetty handler opts)))

(defmethod ig/halt-key! ::jetty
  [_ server]
  (.stop server))

(defonce *system (atom nil))

(defn -main []
  (reset! *system (ig/init config)))

(comment
  (ig/halt! @*system))
