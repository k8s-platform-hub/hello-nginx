# hello-nginx

This quickstart consists of a basic hasura project with a microservice which hosts a static html page using nginx. The static page will be hosted at https://www.cluster-name.hasura-app.io.

This is the right place to start if you want to deploy a website or a static page on Hasura using nginx.

## Introduction

This quickstart project comes with the following by default:
1. A basic hasura project
2. Two tables `article` and `author` with some dummy data
3. A basic nginx microservice running on the `www` subdomain.

## Quickstart

Follow this section to get this project working. Before you begin, ensure you have the latest version of hasura cli tool installed.

### Step 1: Getting the project

```sh
$ hasura quickstart hello-nginx
$ cd hello-nginx
```

### Step 2: Adding your static files

Copy your static files to `microservices/www/app/src/` with the entrypoint being `index.html`.

### Step 3: Deploying on a hasura cluster

```sh
$ git add .
$ git commit -m "Initial Commit"
$ git push hasura master
```

Once the above commands are executed successfully, head over to `https://www.<cluster-name>.hasura-app.io` (in this case `https://www.h34-excise98-stg.hasura-app.io`) to view your app.

## Project structure

### Files and Directories

The project (a.k.a. project directory) has a particular directory structure and it has to be maintained strictly, else `hasura` cli would not work as expected. A representative project is shown below:

```
.
├── hasura.yaml
├── clusters.yaml
├── conf
│   ├── authorized-keys.yaml
│   ├── auth.yaml
│   ├── ci.yaml
│   ├── domains.yaml
│   ├── filestore.yaml
│   ├── gateway.yaml
│   ├── http-directives.conf
│   ├── notify.yaml
│   ├── postgres.yaml
│   ├── routes.yaml
│   └── session-store.yaml
├── migrations/
└── services
    ├── www/
```
