(ns rgm.test
  (:require [clojure.core.async
             :refer [chan <!! >!! thread]])
  )

(thread 42)
