#!/bin/bash
export CONTAINER_NAME="miggos_test_pg"
export VOLUME_NAME="miggos_test_pg_volume"
export IMAGE_REPO="postgres:13"

if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    docker stop $CONTAINER_NAME
fi

# cleanup
docker rm $CONTAINER_NAME
docker volume rm $VOLUME_NAME
