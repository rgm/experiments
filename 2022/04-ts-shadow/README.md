# minimal example of cljs consuming hooks-based tsx

## Running:

1. `make prepare` from project root
1. `overmind s` to start whole system (or issue the commands in `Procfile` in
   individual terminal windows).
2. Visit http://localhost:9090
3. Edit `/myapp/src/main/my/app.cljs`; cljs code should reload in browser.

Restart the shadow process to pick up any changes to the JSX/TSX components in
`/mylib`.
