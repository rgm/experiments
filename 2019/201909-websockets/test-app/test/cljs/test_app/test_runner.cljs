(ns test-app.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [test-app.core-test]
   [test-app.common-test]))

(enable-console-print!)

(doo-tests 'test-app.core-test
           'test-app.common-test)
