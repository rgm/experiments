# amperity vault token renewal

Exploring how to make amperity/vault-clj renew periodic tokens properly.

To run:

```
overmind s -D
clj user.clj
# connect w repl
(start)
(kv/list-secrets client "test_path")
```

Expected:
- in clj repl, should be able to list secrets after 1 min
- in overmind log, should see the token renew, not get kicked out after 1min
