(ns ^:figwheel-hooks dnd.core
  (:require
   [cljsjs.react-beautiful-dnd]
   [juxt.pull.core :as pull :refer [pull]]
   [reagent.dom    :as rdom]
   [reagent.core   :as r]
   [re-frame.core  :as rf]
   [tw-cljs.core   :refer [tw]]))

(def DragDropContext
  (r/adapt-react-class js/ReactBeautifulDnd.DragDropContext))
(def Droppable
  (r/adapt-react-class js/ReactBeautifulDnd.Droppable))
(def Draggable
  (r/adapt-react-class js/ReactBeautifulDnd.Draggable))

(defn mark-pos
  [ms]
  (map-indexed (fn [i m] (assoc m :pos (inc i))) ms))

(defn make-table
  [kfn ms]
  (->> ms
       mark-pos
       (reduce (fn [m item] (assoc m (kfn item) item)) {})))

(def default-db
  {:projects (make-table :id [{:id 1 :title "roadmap"}
                              {:id 2 :title "recdot"}
                              {:id 3 :title "nzn"}])
   :people (make-table :id [{:id 1 :title "ryan"}
                            {:id 2 :title "eli"}
                            {:id 3 :title "mike"}])
   :columns (make-table :title [{:title "people"
                                 :boxes [^:ref [:people 1]
                                          ^:ref [:people 2]]}
                                {:title "projects"
                                 :boxes [^:ref [:projects 1]
                                            ^:ref [:projects 2]]}])})

(comment
 (pull default-db [:columns])
 (pull default-db [:columns {:people [:content]}])
 (pull default-db {:columns [:title]})
 )

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-fx
 ::handle-drag-end
 (fn [cofx [_ drag-data]]
   (prn drag-data)))

(comment
 (require '[re-frame.db :refer [app-db] :rename {app-db *db}])
 (prn @*db)
 (-> (pull @*db [:columns])
     :columns vals (sort-by :pos)))

(rf/reg-sub
 ::columns
 (fn [db _]
   (->> (pull db [:columns]) :columns vals (sort-by :pos))))

(defn BoxList
  [ms]
  (into [#_#_:div (tw [:space-y-4])]
        (for [m ms]
          ^{:key (:id m)}
          [Draggable {:draggable-id (:title m) :index (:pos m)}
           (fn [provided]
             (r/as-element [:div (tw [:border :p-4 :rounded :bg-white]
                                     (merge (js->clj (.-draggableProps provided))
                                            (js->clj (.-dragHandleProps provided))
                                            {:ref (.-innerRef provided)}))
                            (:title m)]))])))

(defn Column
  [{:keys [title boxes]}]
  [:div (tw [:h-full :border :p-8])
   [:h2 (tw [:font-bold :text-xl :mb-8]) title]
   [Droppable
    {:droppable-id title}
    (fn [provided]
      (r/as-element (conj (into [:div (tw [:space-y-4]
                                          (merge (js->clj (.-droppableProps provided))
                                                 {:ref (.-innerRef provided)}))]
                                (BoxList boxes))
                          (.-placeholder provided))))]])

; https://github.com/atlassian/react-beautiful-dnd/issues/427#issuecomment-420563943

(defn Layout
  []
  (let [*cols (rf/subscribe [::columns])]
    (fn []
      [DragDropContext {
                        ; :on-drag-start #(prn %)
                        ; :on-drag-update #(prn %)
                        :on-drag-end
                        (fn [result]
                          (let [result' (js->clj result :keywordize-keys true)]
                            (when (and (:destination result')
                                       (not= (:source result')
                                             (:destination result')))
                              (rf/dispatch [::handle-drag-end result']))))}
       (into [:div (tw [:fixed :inset-0 :w-full :p-8 :grid :grid-cols-2 :gap-8
                        :h-full])]
             (for [c @*cols]
               ^{:key (:title c)}
               [Column c]))])))

(defn ^:after-load mount
  []
  (when-let [host-dom (.getElementById js/document "app")]
    (reagent.dom/render [Layout] host-dom)))

(defn ^:export init
  []
  (rf/dispatch-sync [::initialize-db])
  (mount))
