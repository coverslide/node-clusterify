# clusterify

A command-line utility for node to launch apps in "clustered" mode

## Introduction

The cluster module is a very easy way to scale a node app across multiple CPU's. With clusterify you can develop your app without worrying about clustering at all. Just run `clusterify` when you want to scale your app.

## Installation

```
npm -g install clusterify
```

## Usage

When run by itself, clusterify will automatically scale to the number of CPU's.

```
clusterify myapp.js
```

Clusterify will pass along environment variables and command line arguments to the worker processes.

To specify the number of workers to use, set the NODE_WORKERS environment variable:

```
NODE_WORKERS=10 clusterify myapp.js
```

## TODO
* Worker respawning

## License

ISC
