# syntax=docker/dockerfile:1

FROM debian:trixie-slim
WORKDIR /timesy
RUN apt update && apt upgrade -y && apt -y install git maven openjdk-25-jdk

RUN git clone https://github.com/SWB4-Projektarbeit/Backend.git source

RUN cp source/src/main/resources/application.properties.default source/src/main/resources/application.properties

RUN cd source && mvn clean dependency:go-offline -U
