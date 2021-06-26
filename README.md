# dc-portal
The repo hosts the development of the Digital Connect Self-Service Portal. The portal is to provide GE internal users the subscription access to the rest of DC Services/Products.

## How to launch
It is recommended to launch the app via OCI container spec. For quickest adoption, following below the docker command-

```shell
docker run -e AGENT_REV_TEMP_UNSET=1.2-b.0.reiwa \
CA_PPRS=<app owner's hash> \
EC_AGT_GRP=<can be any random or existing group-name> \
EC_AGT_MODE=<used for system-process access. E.g. "x:gateway"> \
EC_API_APP_NAME=<app context path. E.g. "dcsc"> \
EC_API_DEV_ID=<the app owner's client(license) Id> \
EC_API_OA2=<the URL to SDC> \
EC_PORT=<a local port number to enable the app access. E.g. ":17990"> \
EC_SEED_HOST=<this app's URL> \
EC_SEED_NODE=<the domain seeder's URL. when specified a same value from EC_SEED_HOST, the app becomes self-seeding node> \
ghcr.io/ec-release/api:v1.2beta
```
The deployment requires a pair of client(license) ID and owner's hash which can be aquired [from here](https://github.com/EC-Release/certifactory).
