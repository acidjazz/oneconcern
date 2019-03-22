<p align="center">
  <img src="https://github.com/oneconcern/oneconcern/blob/master/static/logo.png" width="300" alt="1C PNG"/>
</p>

> Artificial Intelligence platform for Disasters

[![GitHub issues](https://img.shields.io/github/issues/oneconcern/oneconcern.svg)](https://github.com/oneconcern/oneconcern/issues)
[![CircleCI](https://img.shields.io/circleci/project/github/oneconcern/oneconcern.svg)](https://circleci.com/gh/oneconcern/oneconcern/)
[![aeonian status](https://img.shields.io/badge/%C3%A6onian-deployed-green.svg)](https://github.com/acidjazz/aeonian)
<a href="https://github.com/nuxt/nuxt.js/"><img src="https://img.shields.io/badge/nuxt.js-v2.5.1-800080.svg?style=flat-square" alt=""/></a>

## Branch Status

master | staging
--- | ---
[![CircleCI](https://circleci.com/gh/oneconcern/oneconcern/tree/master.svg?style=shield)](https://circleci.com/gh/oneconcern/oneconcern/tree/master) | [![CircleCI](https://circleci.com/gh/oneconcern/oneconcern/tree/staging.svg?style=shield)](https://circleci.com/gh/oneconcern/oneconcern/tree/staging)

## Local Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/oneconcern.git
```
* Install dependencies
```bash
yarn install
```
* Generate routes and lever job listings
```bash
yarn cash
```

* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev -o
```
## Deployment
Continuous Deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/oneconcern/oneconcern)
