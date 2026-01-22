(ns myapp.frontend.main
  (:require
   ["react-dom/client" :refer [createRoot]]
   [clojure.edn :as edn]
   [re-frame.core      :as rf]
   [reagent.core       :as rg]
   [taoensso.telemere  :as tel]))

(defonce *REACT-ROOT (atom nil))

(rf/reg-fx :fetch-edn
  (fn [{:keys [url on-success]}]
    (-> (js/fetch url)
        (.then (fn [res] (.text res)))
        (.then (fn [text] (let [data (edn/read-string text)]
                            (rf/dispatch (conj (vec on-success) data)))))
        (.catch (fn [err] (throw (tel/error! (ex-info "fetch failure" {:err err}))))))))

(rf/reg-event-fx :init-app-db
  (fn [_ _]
    {:db {}}))

(rf/reg-event-fx :fetch-data
  (fn [_ _]
    {:fetch-edn {:url "/data" :on-success [:receive-data]}}))

(rf/reg-event-fx :receive-data
  (fn [{db :db} [_ data]]
    {:db (assoc db :data data)}))

(rf/reg-sub :network-data
  (fn [db _]
    (:data db)))

(defn Root []
  (rg/with-let [*data (rf/subscribe [:network-data])]
    [:div "react has mounted, data is " (str @*data)]))

(defn mount-react-18 []
  (when-not @*REACT-ROOT
    (reset! *REACT-ROOT (createRoot (js/document.getElementById "app"))))
  (.render @*REACT-ROOT (rg/as-element [Root])))

(defn ^:dev/before-load unmount
  "Unmount the user interface. Called before hot-reload."
  []
  (when @*REACT-ROOT
    (.unmount @*REACT-ROOT)
    (reset! *REACT-ROOT nil)))

(defn ^:dev/after-load mount
  "(Re-)load the user interface. Called once on startup and at every hot reload
   in dev."
  []
  (rf/dispatch [:fetch-data])
  (mount-react-18))

(defn ^:export boot
  "First load of web app. Runs once, called via <script> in host page."
  []
  (tel/log! ["booting frontend"])
  (rf/dispatch-sync [:init-app-db])
  (mount))
