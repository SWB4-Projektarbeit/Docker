# syntax=docker/dockerfile:1

FROM node:trixie-slim
WORKDIR /timesy
COPY . .
RUN apt update && apt upgrade -y && apt -y install maven openjdk-25-jdk screen

RUN cd Backend && mvn clean -U
RUN screen -dmS Backend && screen -S Backend -X stuff 'mvn spring-boot:run\n'

RUN cd Frontend && npm install -g @angular/cli && npm install -g --allow-scripts=esbuild,nice-napi,esbuild && ng analytics disable
RUN screen -dmS Frontend && screen -S Frontend -X stuff 'ng serve'
