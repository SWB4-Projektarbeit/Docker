# Docker setup for the TimeSy Project
This repo provides the Dockerfiles and compose.yml to automatically set up and run the TimeSy Backend and Frontend.

# Installation
Clone this repo: `git clone https://github.com/SWB4-Projektarbeit/Docker.git`.
Run `install.sh`(Linux and MacOS) or `install.bat`(Windows) to create the Environment file from `.env.default`.
The images are designed to be as slim as possible and will install all necessary dependencies and clone the Backend/Frontend from GitHub on initial creation to keep startup times as low as possible if you need to restart.
There are no automated updates to ensure no regressions can happen in a production environment, if you want to update you have to remove the docker images and rebuild them.

# Setup
Set up the .env file.
Required environment variables are marked with `#Required` in the .env file.

# Running
Run `run.sh`(Linux and MacOS) or `run.bat`(Windows) or `docker compose up` to create the images and then run the containers.
