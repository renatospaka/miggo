. .env.local

export PACKAGE="miggos-test-backend"
export PORT="$API_PORT:$API_PORT" 
export OPS_DB_HOST="host.docker.internal"

if [ "$(docker ps -q -f name=$PACKAGE)" ]; then
  docker stop $PACKAGE
fi

# cleanup
docker rm $PACKAGE

docker build -t $PACKAGE .

docker run -d --name $PACKAGE \
  --env OPS_DB_NAME \
  --env OPS_DB_USERNAME \
  --env OPS_DB_PWD \
  --env OPS_DB_HOST \
  --env OPS_DB_PORT \
  -p $PORT \
  $PACKAGE