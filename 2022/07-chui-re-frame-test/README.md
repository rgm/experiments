# chui/re-frame-test

Debugging a hot reload issue in chui + kaocha-cljs2

https://app.slack.com/client/T03RZGPFR/CCY2V0U6A/thread/CCY2V0U6A-1657259337.012559

## Expected

With `script/start` running, changing test code in an editor should cause
kaocha to re-run the tests in the browser and JVM. In particular, changing a
test from passing to failing should trigger a failure in the browser and pop a
failure notification.

## Observed

The browser tests are triggered and continue to pass, until the browser tab is
reloaded manually and the tests manually triggered.

## Notes

- It seems like the browser doesn't know to reload
  `target/kaocha-test/js/test.js`, but via funnel the browser suite is
  re-running everything.
- It looks like kaocha is triggering shadow and rebuilding the test bundle
  correctly (based on diffing two copies of the test bundle).

## Running tests:

For browser:

```
$ make clean test
```

For headless firefox:

```
$ script/kaocha --profile ci
```

For hot-reload testing, ie. change a test in the editor, the JVM and browser
tests should re-run (assumes you have https://github.com/DarthSim/overmind ...
if not, just run the two commands listed in `Procfile.dev` in two separate
terminals):

```
$ script/start
```
