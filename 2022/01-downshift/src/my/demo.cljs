(ns ^:figwheel-hooks my.demo
  (:require [opengb.spork.select :as sel]
            [reagent.core :as rg]
            [reagent.dom]
            [goog.ui.ComboBox]
            [goog.ui.ComboBoxItem]
            [goog.dom]
            [goog]
            [my.downshift]
            [goog.events]
            ["react-dom" :as rdom]))

(defn hello [] "hello There")

(defn handle-change [cb goog-ev]
  (js/console.log goog-ev)
  (js/console.log (.getValue cb))
  (js/console.log (.getToken cb))
  (prn "handle change" (-> goog-ev .-target .getValue)))

(def items ["one" "two" "three"])

(defn add-styles []
  (when-let [old-style (js/document.getElementById "_combobox_styles")]
    (.remove old-style))
  (let [style (.createElement js/document "style")]
    (set! (.-id style) "_combobox_styles")
    (set! (.-innerHTML style) "
.goog-combobox { border: 1px solid red; padding: 1rem; }
.goog-combobox input { border: 1px solid blue; }
          ")
    (-> js/document .-head (.appendChild style))))

(defn GoogCombo [_]
  (let [*ref (atom nil)
        *cb (atom nil)]
    (rg/create-class
     {:component-did-mount    (fn [c]
                                (prn "did mount")
                                (add-styles)
                                (reset! *cb (goog.ui.ComboBox.))
                                (doto @*cb
                                  (.setDefaultText "hi"))
                                (doseq [i items] (.addItem @*cb (goog.ui.ComboBoxItem. i)))
                                (goog.events/listen @*cb "change" (fn [ev]
                                                                    ( handle-change @*cb ev)))
                                ; (goog.events/listen @*cb "action" handle-action)
                                (.render @*cb @*ref))
      :component-will-unmount (fn [c]
                                (prn "will unmount")
                                (goog/disposeAll #js [@*cb]))
      :reagent-render         (fn [_] [:div {:ref #(reset! *ref %)}])})))

;; uncomment this to alter the provided "app" DOM element
;; (set! (.-innerHTML (js/document.getElementById "app")) (hello))

(defn ^:after-load ^:export boot []
  (prn "sel" sel/ReagentComponent)
  #_ (let [dom (js/document.getElementById "combobox")
        dh (goog.dom/getDomHelper dom)
        cb (goog.ui.ComboBox.)]
    (.render cb dh))
  (reagent.dom/render #_ [sel/ReagentComponent] [:f> my.downshift/Component]
                      (js/document.getElementById "app"))
  (println (hello)))

(defn cb-demo []
;; https://github.com/google/closure-library/blob/master/closure/goog/demos/combobox.html
  (let [cb (goog.ui.ComboBox.)]
    (goog.events/listen cb "change" handle-change)
    (doto cb
      (.setDefaultText "foo")
      (.setUseDropdownArrow true)
      (.addItem (goog.ui.ComboBoxItem. "hi")))))

(def x (cb-demo))
(def parent (goog.dom/getElement "combobox"))

(comment
  (.render x parent))
