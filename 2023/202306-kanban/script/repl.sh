#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
    set -o xtrace
fi

if [[ "${1-}" =~ ^-*h(elp)?$ ]]; then
    cat << EOF
Usage: $0

Start a nrepl into the dev clojure system.
EOF
    exit
fi

cd "$(dirname "$0")/.."

main() {
  # copy env config example if we haven't already
  [ -f config.env.example ] && [ ! -f config.env ] && cp config.env.example config.env
  [ -f config.env ] && . config.env
  [ -f secrets.env ] && . secrets.env

  clj \
    -Sdeps '{:deps {nrepl/nrepl {:mvn/version "RELEASE"} cider/cider-nrepl {:mvn/version "RELEASE"}}}' \
    -A:dev:test \
    -M -m nrepl.cmdline \
    --middleware '[cider.nrepl/cider-middleware]' \
    --interactive --color
}

main "$@"
