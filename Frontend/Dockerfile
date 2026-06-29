# syntax=docker/dockerfile:1

FROM node:trixie-slim
WORKDIR /timesy
COPY source .

RUN npm install -g @angular/cli && npm install && ng analytics disable
