# opentelemetry

Testing the minimal setup of automatic/manual instrumentation to honeycomb
using the opentelemetry java agent.

## setup

Get the java agent jar:

```
$ curl -L -O https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar
```

Set up agent properties in deps.edn. Go get an [API key][1] for ingest and put it in the right places in the `:otel` alias.

Then `script/repl` to start up the system with nrepl. Connect via editor. Use
the rich comment block at the bottom of `user.clj`.

[1]: https://docs.honeycomb.io/send-data/java/opentelemetry-agent/#get-your-honeycomb-api-key
