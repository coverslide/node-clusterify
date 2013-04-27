#!/usr/bin/env node
'use strict'

var cluster = require('cluster')
var fs = require('fs')
var path = require('path')

var scriptarg = process.argv[2]
var scriptFile = path.resolve(scriptarg)

if(cluster.isMaster){
  if(!fs.existsSync(scriptFile)){
    throw new Error('Script file ' + scriptFile + ' not found.')
  }
  var workers = process.env.NODE_WORKERS || require('os').cpus().length
  //this is so the worker can process argvs as if it was run by itself
  cluster.setupMaster({
    exec: scriptFile,
    args: process.argv.slice(3),
    silent: false
  })

  for(var i = 0; i<workers; i++)
    cluster.fork()
}
/* vim: set filetype=javascript : */
