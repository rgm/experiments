(ns rgm.core-test
  (:require
   [clojure.test :refer [deftest is]]
   [clojure.test.check :as tc]
   [clojure.test.check.generators :as gen :refer [sample]]
   [clojure.test.check.properties :as prop]))

(sample gen/string-ascii)

;; ints

(drop 190 (sample gen/nat 201))
(sample gen/small-integer)
(sample gen/large-integer 100)
(sample (gen/large-integer* {:min 5000 :max 100000}) 100)
(sample (gen/choose 0 5000))
(sample gen/size-bounded-bigint)

;; ratios

(sample gen/ratio)
(sample gen/big-ratio)

;; doubles

(sample gen/double)
(sample (gen/double* {:min -1.0 :max 1.0 :infinite? false :NaN? false}))

;; chars / strs

(sample gen/char)
(sample gen/char-ascii)
(sample gen/char-alphanumeric 100)
(sample gen/char-alpha)

(sample gen/string)
(sample gen/string-ascii)
(sample gen/string-alphanumeric 100)

;; keywords

(sample gen/keyword)
(sample gen/keyword-ns)

;; symbols

(sample gen/symbol)
(sample gen/symbol-ns)

;; uuid

(sample gen/uuid)
(sample gen/boolean)

;; collections

(sample (gen/vector gen/nat))
(sample (gen/vector gen/nat 10))
(sample (gen/vector gen/nat 2 4))
(sample (gen/vector-distinct gen/nat))

(sample (gen/list gen/boolean))
(sample (gen/list-distinct gen/small-integer))

(sample (gen/set gen/nat))
(sample (gen/sorted-set gen/nat))

(sample (gen/map gen/keyword gen/string-ascii))

(sample (gen/tuple gen/nat gen/string-alphanumeric gen/boolean))

;; entities (ie. map with known keys)
(sample (gen/hash-map :first-name gen/string-alphanumeric
                      :last-name gen/string-alphanumeric
                      :age gen/nat))

(sample (gen/not-empty (gen/vector gen/boolean)))

;; nesting

(gen/sample (-> gen/boolean gen/vector gen/vector))

;; recursion

(drop 90 (sample (gen/recursive-gen gen/vector gen/boolean) 100))

;; random selection

(sample (gen/elements [:x :y :z]))
(sample (gen/return 1))
(sample (gen/shuffle (range 10)))
(sample (gen/one-of [gen/string-alphanumeric
                     gen/nat
                     (gen/return nil)
                     (gen/vector gen/nat)]))
(sample (gen/choose 0 50))
(sample (gen/frequency [[10 gen/nat]
                        [2 gen/string-alphanumeric]
                        [1 (gen/return nil)]]))

;; building simple generators

;; such-that ~= filter

(sample (gen/such-that even? gen/nat))
(sample (gen/such-that odd? gen/nat))
(sample (gen/such-that neg? gen/small-integer))
(sample (gen/such-that #(zero? (mod % 100)) gen/nat)) ;; wasteful, use fmap

;; fmap ~= map
;; doesn't throw away work
;; shrinks better than bind, such-that

(sample (gen/fmap str gen/nat))
(sample (gen/fmap #(* 2 %) gen/nat))
(sample (gen/fmap #(- %) (gen/such-that #(not= 0 %) gen/nat)))
(sample (->> gen/nat (gen/fmap inc) (gen/fmap -)))
(sample (gen/fmap #(apply str %) (gen/not-empty (gen/vector (gen/elements #{\a \b \c \d})))))

;; bind ~= fmap, inside out. Feed one generator in as arg to fn that creates new gen
;; shrinks poorly. Generators aren't values

(sample (gen/bind gen/nat #(gen/vector gen/char-alpha %)))

(let [no-zeroes (gen/fmap inc gen/nat)
      n-by-m (gen/tuple no-zeroes no-zeroes)]
  (sample (gen/bind n-by-m (fn [[n m]]
                             (gen/vector
                              (gen/vector gen/small-integer m)
                              n)))))

;; let

(gen/sample (gen/let [len gen/nat]
              (gen/vector gen/nat len)))

(gen/sample (gen/let [[n m] (gen/tuple (gen/fmap inc gen/nat) (gen/fmap inc gen/nat))]
              (gen/vector (gen/vector gen/small-integer m) n)))

;; email

(def gen-email-char (gen/such-that #(re-matches #"[^<>\[\]\.,;:\s@\"]" (str %))
                                   gen/char-ascii))

(def gen-email-string (gen/fmap clojure.string/join (gen/not-empty (gen/vector gen-email-char))))
(sample gen-email-string)

(def gen-email (gen/fmap
                (fn [[n1 nn
                      hns
                      tld1 tld2]]
                  (str (clojure.string/join "." (cons n1 nn))
                       "@"
                       (clojure.string/join "." (conj hns (str tld1 tld2)))))
                (gen/tuple gen-email-string
                           (gen/vector gen-email-string)
                           (gen/not-empty (gen/vector gen-email-string))
                           gen-email-string
                           gen-email-string)))

(def email-re
  #"(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\.,;:\s@\"]+\.)+[^<>()\[\]\.,;:\s@\"]{2,})")

(comment

 (tc/quick-check
  100
  (prop/for-all [email gen-email]
                (re-matches email-re email)))


 )
