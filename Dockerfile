FROM node:16.16-alpine3.16

RUN apk update && apk upgrade && \
    apk add --no-cache bash curl && \
    apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
RUN npm install

RUN npm install npm@8.17.0 --location=global && \
    npm install typescript --location=global && \
    npm install nodemon --location=global

COPY . /app/
RUN npm run build && \
    npm cache clean --force

# CMD [ "yarn", "start" ]
CMD ["tail", "-f", "/dev/null"]