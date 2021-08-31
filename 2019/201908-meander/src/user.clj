(ns user
  (:require [meander.match.delta :as m]))

(comment
 (m/match [1 2 1]
          [?a ?a]
          ?a
          [?a ?b ?a]
          [:foo ?a]
          )

(m/search [1 1 2 2 3 4 5]
          [_ ... (pred odd? ?a) (pred even? ?b) . _ ...]
          [?a ?b])

(m/find {:foo 1}
        {:foo ?a}
        ?a)


)
