FROM node:16-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash curl && \
    apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
RUN yarn install

RUN npm install npm@8.17.0 --location=global && \
    npm install typescript --location=global && \
    npm install nodemon --location=global

ENV API_PORT 8080

COPY . /app/
RUN yarn build
RUN yarn cache clean

ENV NODE_ENV production

EXPOSE $API_PORT

CMD [ "yarn", "start" ]