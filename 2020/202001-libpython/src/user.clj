(ns user
  (:require
   [libpython-clj.require :refer [require-python]]
   [libpython-clj.python :as py]
   [tech.v2.datatype :as dtype]))

(declare np)
(require-python '[numpy :as np])

(np/array [[1 2] [3 4]])
(map vec (vec (np/transpose [[0 0 1] [1 2 2]])))


(require '[libpython-clj.require :refer [require-python]])
(require '[libpython-clj.python :refer [py]])

(py/initialize!)

(require-python '[pint])

(def *ureg (pint/UnitRegistry))

(let [+ (fn [scalar unit] (py/call-attr unit "__add__" scalar))
      * (fn [scalar unit] (py/call-attr unit "__mul__" scalar))]
  (str (+ (* 3 (py/get-attr *ureg "m"))
          (* 4 (py/get-attr *ureg "ft")))))

(py/python-type *ureg)
(py/python-type (py/get-attr *ureg "m"))
(py/att-type-map pint)
