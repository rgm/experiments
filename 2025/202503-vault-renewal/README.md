# amperity vault token renewal

Exploring how to make amperity/vault-clj renew periodic tokens properly. This
project issues a 2m TTL renewable token, and makes sure that it always gets
renewed with about 45-50s to go.

The trick seems to be that we need to supply `:vault.auth/renewable? true` and
an instant value for `:vault.auth/expires-at` in the auth info supplied to the
vault client. If these keys aren't present, then the renewal machinery will not
kick in. 

Note that `vault.auth.token/resolve-token!` will annotate the auth state
correctly by just asking vault, but this isn't automatic.

To run:

```
overmind s -D
clj user.clj
# connect w repl
(start)
(kv/list-secrets client "test_path")
```

Expected:
- in clj repl, should still be able to list secrets after 1 min
- in overmind log, should see the token renew, not get kicked out after 1min
- if I run the dotimes, the TTL countdown will jump back to 120s at some point
