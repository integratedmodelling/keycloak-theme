## Integrated Modelling Partnersip - Keycloak theme

We expect [Docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/) to be available:

## Usage

```
docker compose up
```

The _Admin console_ http://localhost:8078/admin/

* User: `admin`
* Password: `admin`

## Theme development documentation

* https://www.keycloak.org/docs/latest/server_development/#_themes


## Other tasks

### Export `im` realm

To export `im` realm changes and share across the team, we use `kc.sh export`

Assuming the service is running, execute `kc.sh export [...]` inside the container, e.g.

```
docker compose exec server /opt/keycloak/bin/kc.sh export --file /opt/keycloak/data/import/im.json --realm im
```

This will make the necessary changes under `./data/import/im.json`. Commit and push the changes.

More info: https://www.keycloak.org/server/importExport
