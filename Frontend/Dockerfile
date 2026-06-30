# syntax=docker/dockerfile:1

FROM node:trixie-slim
WORKDIR /timesy

RUN apt update && apt upgrade -y && apt -y install git

RUN git clone https://github.com/SWB4-Projektarbeit/Frontend.git source
RUN cd source && npm install -g @angular/cli && npm install && ng analytics disable
