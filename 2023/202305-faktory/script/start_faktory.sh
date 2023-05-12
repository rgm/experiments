#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
    set -o xtrace
fi

cd "$(dirname "$0")/.."

CONTAINER_NAME="rgm_faktory_demo"
BASIC_AUTH_PASSWORD="some_password"

(sleep 3; open "http://localhost:7420") & # wait then launch web view

mkdir -p data
docker run --rm -it \
  --name $CONTAINER_NAME \
  -v $(pwd)/faktory_data:/var/lib/faktory/db \
  -e "FAKTORY_PASSWORD=$BASIC_AUTH_PASSWORD" \
  -p 127.0.0.1:7419:7419 \
  -p 127.0.0.1:7420:7420 \
  contribsys/faktory:latest \
  /faktory -b :7419 -w :7420 -e production
