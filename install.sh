#!/bin/bash

if [ ! -f .env ]; then
    cp .env.default .env
fi
