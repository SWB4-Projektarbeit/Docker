# syntax=docker/dockerfile:1

FROM debian:trixie-slim
WORKDIR /timesy
COPY source .
RUN apt update && apt upgrade -y && apt -y install maven openjdk-25-jdk

RUN mvn clean dependency:go-offline -U
