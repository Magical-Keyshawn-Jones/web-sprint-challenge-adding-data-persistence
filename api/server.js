// build your server here and require it from index.js
const express = require('express')
const server = express()
const resource = require('./resource/router')
const project = require('./project/router')
const task = require('./task/router')

server.use(express.json())
server.use('/api/resources', resource)
server.use('/api/projects', project)
server.use('/api/tasks', task)

module.exports = server