# syntax=docker/dockerfile:1

FROM debian:trixie
WORKDIR /timesy
COPY Backend .
RUN apt update && apt upgrade -y && apt -y install maven openjdk-25-jdk

RUN mvn clean dependency:go-offline -U
