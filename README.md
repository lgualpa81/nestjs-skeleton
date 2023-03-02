<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description NestJS Project Skeleton

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## New project
```bash
$ nest new project-skeleton
```

## Installation

```bash
$ cd project-skeleton && yarn install
```

## Install dependencies
```bash
$ yarn add @nestjs/swagger && yarn add @nestjs/config morgan && yarn add -D @types/morgan
```

## Running the app

Rename file ```.environment_name.env``` to .```development.env``` or ```.production.env``` and set configurations, after that run the command

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Create CRUD skeleton
```bash
$ nest g res users
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
