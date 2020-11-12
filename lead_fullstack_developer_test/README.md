# Prerequisites

Requires `docker engine 19.03.0+`.

Docker Mac Install: https://hub.docker.com/editions/community/docker-ce-desktop-mac/

Docker Windows Install: https://hub.docker.com/editions/community/docker-ce-desktop-windows/


## Using `docker-compose`.

### Building

run `docker-compose build`.

### Running

run `docker-compose up`.

### Notes

Any change to the code will need to be rebuild being either frontend or backend.

## Without `docker-compose`

### Building

Run `mvn clean install` for building `southern-blue-ringed-octopus`.

### Running

Create a `config.yml` based on `southern-blue-ringed-octopus/src/main/resources/config.yml.dist`.
Start the backend server using `java -jar southern-blue-ringed-octopus.jar path/to/config.yml`.
While developing, the frontend can be started using `npm start`.

#### database

The project uses `PostgreSQL`. If ran outside `docker-compose`, the `PostgreSQL` instance should be listening to `5432` on `localhost`.
