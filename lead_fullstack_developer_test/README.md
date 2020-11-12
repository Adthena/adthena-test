# Note

If you have any issues setting up any part of our test, please let us know so that we can assist.

# Prerequisites

Requires `docker engine 19.03.0+`.

Docker Mac Install: https://hub.docker.com/editions/community/docker-ce-desktop-mac/

Docker Windows Install: https://hub.docker.com/editions/community/docker-ce-desktop-windows/

Docker install Linux. Follow instruction for your dist: https://docs.docker.com/engine/install/

Note. Docker for Windows and Mac, includes docker compose, however on linux versions, you may need to install it serperately.

See Instruction for docker compose on linux here:

https://docs.docker.com/compose/install/

## Using `docker-compose`.

Once you have installed Docker and Docker Compose, you can go in to the root of the repo and run the following commands in your terminal:

### Building

`docker-compose build .`

### Running

`docker-compose up .`

### Notes

Any change to the code will need to be rebuild the docker containers being either frontend or backend.


