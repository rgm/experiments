(ns user
  (:require
   [libpython-clj.python :as py :refer [py. py.. py.-]]))

(py/initialize! :python-version "/Users/rgm/.pyenv/versions/3.6.9/bin/python")
(require '[libpython-clj.require :refer [require-python]])
; (py/initialize! :python-version "/Users/rgm/Projects/experiments/202002-libpy-tensorflow/.direnv/python-3.6.9/bin/python")
