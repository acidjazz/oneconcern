<p align="center">
  <img src="https://github.com/acidjazz/oneconcern/blob/master/static/logo.png" alt="1C PNG"/>
</p>

> Artificial Intelligence platform for Disasters

[![CircleCI](https://img.shields.io/circleci/project/github/acidjazz/oneconcern.svg)](https://circleci.com/gh/acidjazz/oneconcern/)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)

## Branch Status

master | staging | dev
--- | --- | ---
[![CircleCI](https://circleci.com/gh/acidjazz/oneconcern/tree/master.svg?style=shield)](https://circleci.com/gh/acidjazz/oneconcern/tree/master) | [![CircleCI](https://circleci.com/gh/acidjazz/oneconcern/tree/staging.svg?style=shield)](https://circleci.com/gh/acidjazz/oneconcern/tree/staging) | [![CircleCI](https://circleci.com/gh/acidjazz/oneconcern/tree/dev.svg?style=shield)](https://circleci.com/gh/acidjazz/oneconcern/tree/dev)

## Local Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/oneconcern.git
```
* Install dependencies
```bash
yarn install
```
* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```
> To serve to other machines via your IP address run `yarn dev-public`

## Deployment
Continuous Deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/acidjazz/oneconcern)
