#!/bin/bash

git clone https://github.com/SWB4-Projektarbeit/Frontend.git Frontend/source
git clone https://github.com/SWB4-Projektarbeit/Backend.git Backend/source

cp Backend/source/src/main/resources/application.properties.default Backend/source/src/main/resources/application.properties

if [ ! -f .env ]; then
    cp .env.default .env
fi
