(ns rgm.pure-functions-test
  (:require [clojure.string :as string]
            [clojure.test :refer :all]
            [clojure.test.check.clojure-test :refer [defspec]]
            [clojure.test.check.properties :as prop]
            [clojure.test.check.generators :as gen]))

;; functions under test
(defn my-reverse [xs] (into () xs))
(defn my-min [nums] (assert (not (empty? nums))) (first (sort nums)))
(defn sum [xs] (reduce + 0 xs))
(defn video-id [video]
  (-> video :metadata :connections :comments :uri (->> (re-find #"videos/(\d+)")) second))
(defn strip-query [url] (string/replace url #"[?].*" ""))

;; challenge: cover the entire desired behaviour
;; technique: adversarial ... imagine someone who doesn't want to actually write the working code

;; what does it *mean* to reverse a list?

; (defn my-reverse [xs] xs) ;; stub implementation should fail

(defspec reverse-inverse-of-self 100
  (prop/for-all
   [xs (gen/vector gen/nat)]
   (= xs
      (my-reverse (my-reverse xs)))))

; (defspec reverse-recursive
;   (prop/for-all
;    [v1 (gen/vector gen/nat)
;     v2 (gen/vector gen/nat)]
;    (= (concat (my-reverse v1) (my-reverse v2))
;       (my-reverse (concat v1 v2)))))

; (ns-unmap 'rgm.pure-functions-test 'reverse-recursive)

;; sum
;; distinguish it from product, don't dupe code

; (defn sum [xs] (if (empty? xs) 0 (* (count xs) (first xs)))) ;; lazy impl

(defspec sum-constants
  (prop/for-all
   [x gen/small-integer
    the-count gen/nat]
   (let [xs (repeat the-count x)]
     (= (* the-count x)
        (sum xs)))))

(defspec sum-list-expandable
  (prop/for-all [xs (gen/vector gen/small-integer)
                 ys (gen/vector gen/small-integer)]
                (= (sum (concat xs ys))
                   (sum [(sum xs) (sum ys)]))))

(defspec sum-list-commutative
  (prop/for-all [xs (gen/vector gen/small-integer)]
                (= (sum xs)
                   (sum (reverse xs)))))

;; min

(defspec min-recursive
  (prop/for-all [xs (gen/not-empty (gen/vector gen/small-integer))]
                (let [the-min (my-min xs)]
                  (every? #(<= the-min %) xs))))

(deftest min-empty-list
  (is (thrown? Throwable (my-min []))))

(comment
 (my-min [])
 (every? #(<= 12 %) [])
 )

;; videos

(defn ->video
  [id]
  (assoc-in {} [:metadata :connections :comments :uri]
            (str "https://example.org/videos/" id "/more-stuff")))

(defspec video-id-extraction 100
  (prop/for-all [id gen/nat]
                (let [id' (str id)
                      v (->video id')]
                  (= id' (video-id v)))))

(comment
 (gen/sample gen-video))

;; strip query

(def gen-url (->> (gen/vector (gen/not-empty gen/string-alphanumeric))
                  (gen/fmap #(string/join "/" %))
                  (gen/fmap #(str "https://example.com/" %))))

(def gen-query-string (->> (gen/map (gen/not-empty gen/string-alphanumeric)
                                    (gen/not-empty gen/string-alphanumeric))
                           (gen/fmap #(map (fn [[k v]] (str k "=" v)) %))
                           (gen/fmap #(string/join "&" %))
                           (gen/fmap #(str "?" %))))

(defspec url-with-query-string 100
  (prop/for-all [url gen-url
                 qs gen-query-string]
                (= url
                   (strip-query (str url qs)))))

(defspec url-without-query-string 100
  (prop/for-all [url gen-url]
                (= url (strip-query url))))

(defspec url-impotent
  (prop/for-all [url gen-url
                 qs gen-query-string]
                (let [uri (str url qs)]
                  (= (-> uri strip-query)
                     (-> uri strip-query strip-query)))))

(comment
 (gen/sample gen-url)
 (gen/sample gen-query-string)
 
 )

; (defspec )
