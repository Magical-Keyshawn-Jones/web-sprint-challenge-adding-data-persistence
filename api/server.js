// build your server here and require it from index.js
const express = require('express')
const server = express()
const resource = require('./resource/router')
const project = require('./project/router')

server.use(express.json())
server.use('/api/resources', resource)
server.use('/api/projects', project)

module.exports = server