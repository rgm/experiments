(ns my.downshift
  (:require
   [cljs-bean.core :refer [bean ->clj ->js]]
   [clojure.string :as str]
   [react :refer [useState]]
   [downshift :refer [useCombobox]]))

; https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#onselecteditemchange

(def raw-items (->> ["apple" "pear" "banana" "orange" "grape"] sort))

(defn p
  "call hook-provided props fns with js<->clj marshalling for hiccup."
  ([f] (->clj (f)))
  ([f x] (->clj (f (->js x)))))

(defn sel-change [x] (prn x))

(defn input-change [set-items x]
  (let [input-value (-> x bean :inputValue str/lower-case)]
    (set-items (->js (filter #(str/starts-with? (str/lower-case %) input-value)
                             raw-items)))))

(defn MenuItem [getItemProps i x highlighted?]
  [:li (merge (p getItemProps {:item x :index i})
              {:style (when highlighted?
                        {:background "#bde4ff"}
                        {})})
   x])

(defn Component []
  (let [[items set-items] (useState (->js raw-items))
        hook (useCombobox
              (->js {:items                items
                     :onSelectedItemChange sel-change
                     :onInputValueChange   #(input-change set-items %)}))
        {:keys [isOpen getToggleButtonProps getLabelProps
                getMenuProps getInputProps getComboboxProps
                highlightedIndex getItemProps]} (bean hook)]
    [:div
     [:label (p getLabelProps) "choose element"]
     [:div (p getComboboxProps)
      [:input (p getInputProps)]
      [:button (merge {:type "button"
                       :aria-label "toggle menu"}
                      (p getToggleButtonProps))
       \u02c5]]
     (into [:ul (p getMenuProps)]
           (when true #_isOpen
             (map-indexed (fn [i x]
                            (let [highlighted? (= i highlightedIndex)]
                            [MenuItem getItemProps i x highlighted?]))
                          items)))]))

