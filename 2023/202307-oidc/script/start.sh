#!/usr/bin/env bash

# Start a keycloak container

set -o errexit
set -o nounset
set -o pipefail
if [[ "${TRACE-0}" == "1" ]]; then
    set -o xtrace
fi

if [[ "${1-}" =~ ^-*h(elp)?$ ]]; then
    cat << EOF
Usage: $0

Start a keycloak container
EOF
    exit
fi

cd "$(dirname "$0")/.."

IMAGE_NAME="keycloak/keycloak:22.0"
CONTAINER_NAME="experiment_keycloak"
VOLUME_NAME="experiment_keycloak_data"
KEYCLOAK_ADMIN="admin"
KEYCLOAK_ADMIN_PASSWORD="admin"
PORT=${PORT:=7800}

 # remove the old container
docker rm -f $CONTAINER_NAME 2> /dev/null || true

# wait then launch web view
(sleep 3; open "http://localhost:$PORT") &

docker run --rm -it \
  --name "$CONTAINER_NAME" \
  -e "KEYCLOAK_ADMIN=$KEYCLOAK_ADMIN" \
  -e "KEYCLOAK_ADMIN_PASSWORD=$KEYCLOAK_ADMIN_PASSWORD" \
  --mount type=volume,source="$VOLUME_NAME",target=/opt/keycloak/data \
  -v "${PWD}/data":/opt/keycloak/data/import \
  -v "${PWD}/providers":/opt/keycloak/providers \
  -v "${PWD}/themes":/opt/keycloak/themes \
  -p 127.0.0.1:$PORT:8080 \
  "$IMAGE_NAME" \
  start-dev \
  --features=declarative-user-profile \
  --spi-theme-static-max-age=-1 \
  --spi-theme-cache-themes=false \
  --spi-theme-cache-templates=false
