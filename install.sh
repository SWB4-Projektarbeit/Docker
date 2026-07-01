#!/bin/sh

if [ ! -f .env ]; then
    cp .env.default .env
    echo "Created '.env' file."
else
    echo "'.env' file already exists."
fi
