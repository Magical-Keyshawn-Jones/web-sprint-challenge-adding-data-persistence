// build your `/api/projects` router here
const model = require('./model')
const project = require('express').Router()

project.get('/', (req, res) => {
    const { id }= req.params

    model.getAll()
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to retrieve projects' })
    })
})

project.post('/', (req, res) => {
    const { body } = req

    model.create(body)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create post'})
    })
})

module.exports = project