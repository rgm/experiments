# minimum-ring

Trying for the current state of a minimum ring + re-frame setup that works with
calva/cider jack-in.

## getting started

1. Run `npm install`
2. Start VS Code + Calva or neovim + Conjure:
   - In calva: hit the `REPL ⚡` button (lower left) and "jack in". Use the deps.edn + shadow-cljs option (2/3 down).
   - In conjure: `:term script/start-nrepl`. Evaluate `(user/start-shadow)` to start the shadow-cljs build and prep the current nrepl session for connecting to a browser.
3. Run `(myapp.backend.main/go)`.
4. Open `http://localhost:9000` in a browser
