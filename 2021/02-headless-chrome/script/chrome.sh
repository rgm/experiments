#!/usr/bin/env bash

# Start headless chrome in a docker container

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
    set -o xtrace
fi

if [[ "${1-}" =~ ^-*h(elp)?$ ]]; then
    cat << EOF
Usage: $0

Start headless chrome in a docker container
EOF
    exit
fi

cd "$(dirname "$0")/.."

IMAGE_NAME="zenika/alpine-chrome"
CONTAINER_NAME="chrome-headless"

docker run --rm -it \
  --name "$CONTAINER_NAME" \
  -p 127.0.0.1:9222:9222 \
  "$IMAGE_NAME" \
  --no-sandbox \
  --remote-debugging-address=0.0.0.0 \
  --remote-debugging-port=9222 \
  --disable-gpu
