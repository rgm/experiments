(ns rgm.core
  (:require
    [cljs.pprint :as pp]
    [cljs.spec.alpha :as s]
    [day8.re-frame.http-fx]
    [devcards.core :refer [defcard-rg]]
    [expound.alpha :as expound]
    [re-frame.core :as re-frame]
    [reagent.core :as reagent]
    [semantic-ui-react :as sui]
    [stylefy.core :as stylefy]))

(s/def :app-db/click-count nat-int?)

(s/def :app-db/db (s/keys :req-un [:app-db/click-count]))

(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info
             (str "spec check failed: "
                  (expound/expound-str a-spec db))
             {}))))

(def check-spec
  (re-frame/after (partial check-and-throw :app-db/db)))

(def default-db {:click-count 0})

(re-frame/reg-event-db
 :initialize-db
 [check-spec]
 (fn [_ _] default-db))

(re-frame/reg-sub
  :subs/current-count
  (fn [db _] (:click-count db)))

(defn to-english
  "thanks https://gist.github.com/devn/1691304"
  [n]
  (pp/cl-format nil "~@(~@[~R~]~^ ~A.~)" n))

(re-frame/reg-sub
  :subs/current-count-english
  ;; demo of L3 stacking
  ;; bit contrived since this will always re-run
  (fn [_ _] (re-frame/subscribe [:subs/current-count]))
  (fn [current-count _] (to-english current-count)))

(re-frame/reg-event-db
  :evt/increment-count
  [check-spec]
  (fn [db [_ _]] (update db :click-count inc)))

(defcard-rg another-button
  "** some markdown documentation **"
  (fn [data-atom owner]
    [:<>
     [:> sui/Header "A header"]
     [:> sui/Button "a button"]])
  {:some "initial data"}
  {:inspect-data true})

(defn layout-ui
  []
  (let [current-count (re-frame/subscribe [:subs/current-count-english])]
    [:<>
     [:> sui/Header "re-frame example"]
     [:> sui/Button
      {:on-click #(re-frame/dispatch [:evt/increment-count])}
      "increment count"]
     [:> sui/Divider]
     [:div
      "current count is "
      [:> sui/Label @current-count]]]))

(defonce initializing? (atom true))

(defn mount-root
  []
  (when @initializing?
    (re-frame/clear-subscription-cache!)
    (re-frame/dispatch-sync [:initialize-db])
    (stylefy/init)
    (reset! initializing? false))
  (reagent/render
    [:> sui/Container
     (stylefy/use-style {:margin-top "2em"} {})
     [layout-ui]]
    (.getElementById js/document "app")))

(mount-root)

(comment
  ;;; eval this to check if we're connected properly
  (js/alert "hi from editor via piggieback")
  (re-frame/dispatch [:evt/increment-count]))
