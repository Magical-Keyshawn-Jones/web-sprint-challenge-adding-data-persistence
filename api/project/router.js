// build your `/api/projects` router here
const model = require('./model')
const project = require('express').Router()

project.get('/', (req, res) => {
    model.getAll()
    .then(results => {
        results.forEach(thing => thing.project_completed = Boolean(thing.project_completed))
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to retrieve projects' })
    })
})

project.post('/', (req, res) => {
    const { body } = req
    // console.log(body)
    model.create(body)
    .then(results => {
        results.project_completed = Boolean(results.project_completed)
        console.log(results)
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create post'})
    })
})

module.exports = project