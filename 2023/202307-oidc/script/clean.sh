#!/usr/bin/env bash

# Remove keycloak container, volume

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
    set -o xtrace
fi

cd "$(dirname "$0")/.."

CONTAINER_NAME="experiment_keycloak"
VOLUME_NAME="experiment_keycloak_data"

docker container rm -f $CONTAINER_NAME 2> /dev/null || true
docker volume rm -f $VOLUME_NAME 2> /dev/null || true
