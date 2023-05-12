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

Start a worker process (ie. a job consumer).
EOF
    exit
fi

cd "$(dirname "$0")/.."

main() {
  # copy env config example if we haven't already
  [ -f config.env.example ] && [ ! -f config.env ] && cp config.env.example config.env
  [ -f config.env ] && . config.env
  [ -f secrets.env ] && . secrets.env

  clojure -M -m experiment.worker-main
}

main "$@"
