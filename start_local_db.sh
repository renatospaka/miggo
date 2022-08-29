#!/bin/bash
export CONTAINER_NAME="miggos_test_pg"
export VOLUME_NAME="miggos_test_pg_volume"
export IMAGE_REPO="postgres:13"

. ./.env.local

if [ ! "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    if [ "$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)" ]; then
        # cleanup
        docker rm $CONTAINER_NAME
    fi
    # pull image and run container
    docker pull $IMAGE_REPO
    docker run -d --name $CONTAINER_NAME -p $OPS_DB_PORT:5432 \
        -v $VOLUME_NAME:/var/lib/postgresql/data \
        -e POSTGRES_PASSWORD=$OPS_DB_PWD -e POSTGRES_USER=$OPS_DB_USERNAME \
        -e POSTGRES_DB=$OPS_DB_NAME $IMAGE_REPO
fi