# TAXI 24
[![Maintainability](https://api.codeclimate.com/v1/badges/fd9ddb7607378ee27d05/maintainability)](https://codeclimate.com/github/Kibetchirchir/taxi24/maintainability)[![TAXI24](https://circleci.com/github/Kibetchirchir/taxi24.svg?style=svg)](https://circleci.com/github/Kibetchirchir/taxi24)

## Overview

A simple taxi 24 that carries out various taxi management task, show casing the following functinalities:

1. DRIVER CRUD
2. TRIPS CRUD
3. Riders CRUD

<!-- TOC depthFrom:2 -->

- [Overview](#overview)
- [1. :rocket: Getting Started](#1-rocket-getting-started)
  - [1.1 Prerequisites](#11-prerequisites)
  - [1.2. Run locally](#12-run-locally)
  - [1.3. Test Locally](#13-test-locally)
  - [1.4. Running Test](#14-running-test)
- [2. :lock: Authentication](#2-lock-authentication)
- [3. :bookmark: API Versioning](#3-bookmark-api-versioning)
- [3. :green_heart: HTTP Response Codes](#3-green_heart-http-response-codes)
- [4. :bookmark: Resources](#4-bookmark-resources)
  - [4.1. Authentication](#41-authentication)
  - [4.2. API Routes](#42-api-routes)
- [5. :pencil: License](#5-pencil-license)

<!-- /TOC -->

## 1. :rocket: Getting Started

### 1.1 Prerequisites

To get started, ensure that you have [NodeJS](https://nodejs.org/en/download/) installed on your local machine:
- Yarn 

### 1.2. Run locally

- Clone repository or clone your own fork

  ```bash
  git clone git@github.com:Kibetchirchir/taxi24.git
  ```

- Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials.
- Install dependencies by running `yarn` on your terminal.
- Build the application by running `yarn build`
- Two npm scripts are availiable to spin up the app server:
  - `yarn start` spin up the server without watching for any file changes
  - `yarn dev:start` watches for any file changes and reloads the server

### 1.3. Test Locally

To test or consume api locally, you can make use of [_Postman_](https://www.getpostman.com) or [_Insomnia_](https://insomnia.rest/download/)

### 1.4. Running Test

Test specs are implemented using [_jest_](https://jestjs.io) .

Two npm scripts are available to run the test suite:

1. `yarn test` - Performs a single full test suite run, including instanbul code coverage reporting. Summary coverage reports are written to stdout, and detailed HTML reports are available in `/coverage/index.html`

## 2. :lock: Authentication

// todo

## 3. :bookmark: API Versioning

The second part of the URI specifies the API version you wish to access in the format `v{version_number}`.
For example, version 1 of the API (most current) is accessible via:

```http
  http://localhost:3000/api/v1
```

## 3. :green_heart: HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `401` `Unauthorized` The supplied API credentials are invalid
- `403` `Forbidden` The credentials provided do not have permissions to access the requested resource
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occurred

## 4. :bookmark: Resources

### 4.1. Authentication

// todo

### 4.2. API Routes

| URI                                                           | HTTP Method | Description              |
| ------------------------------------------------------------- | :---------: | ------------------------ |
| [<code>**/api/v1/drivers](/docs/POST_thumbnail.md) |   `POST`    | Get and POST drivers |
| [<code>**/api/v1/riders](/docs/POST_jsonpatch.md) |   `POST`    | Get and POST riders     |
| [<code>**/api/v1/trips](/docs/POST_jsonpatch.md) |   `POST`    | Get and POST trips     |

## 5. :pencil: License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


