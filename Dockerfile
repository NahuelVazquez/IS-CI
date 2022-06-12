FROM node:16.8-alpine3.11 as builder

ENV NODE_ENV production 

WORKDIR /home/node

COPY . /home/node

RUN npm ci \
    && npm run build \