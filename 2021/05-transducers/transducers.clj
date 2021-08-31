(ns transducers)

; https://bsless.github.io/transducers-intro/
; https://bendyworks.com/blog/transducers-clojures-next-big-idea
; https://reborg.net/post/621211973722472448/this-is-the-first-part-of-an-article-dedicated-to

;; how we go from reducing to transducing

(fn [reduction-fn]
  (fn
    ;; base case
    ([] (reduction-fn))
    ;; lazy case
    ([result] (reduction-fn result))
    ;; actually performs work
    ([result input] (reduction-fn result input))))

(comment
  ;; step 1 - re-implement map and filter as recursions

  (defn map' [f coll]
    (when (not= '() coll)
      (conj (map' f (rest coll))
            (first (f coll)))))

  (defn filter' [pred coll]
    (when (not= '() coll)
      (let [f (first coll)
            r (rest coll)]
        (if (pred f)
          (conj (filter' pred r) f) ;; does this have to be a conj?
          (filter' pred r)))))
  
  ;; notice that map and filter have a vaguely common-looking recursion.
  ;; can we extract the different bits?

  ;; step 2 - implement as iterative style, passing its result along

  (defn map'' [f result coll]
    (if (not= '() coll)
      (map'' f (f result (first coll)) (rest coll))
      result))

  ;; in use:
  (map'' (fn [result n] (conj result (inc n))) [] (range 10)) ;; => [1 2 3 4 5 6 7 8 9 10]

  (defn filter'' [f result coll]
    (if (not= '() coll)
      (filter'' f (f result (first coll)) (rest coll))
      result))

  ;; in use:
  (filter'' (fn [result n] (if (odd? n) (conj result n) result)) [] (range 10)) ;; => [1 3 5 7 9]

  ;; OK, so now map'' and filter'' are better called reduce

  ;; step 3 - isolate the output builder (conj) and the actual fn used (inc or odd?)

  (defn reduce''' [f result coll]
    (if (not= '() coll)
      (reduce''' f (f result (first coll)) (rest coll))
      result))

  (defn mapping [result n] (conj result (inc n)))
  (defn filtering [result n] (if (odd? n) (conj result n) result))

  (reduce''' mapping [] (range 10))
  (reduce''' filtering [] (range 10))




  )
