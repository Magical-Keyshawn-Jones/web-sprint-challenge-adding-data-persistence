// build your `/api/resources` router here
const model = require('./model')
const resource = require('express').Router()

resource.get('/', (req, res) => {
    model.getAll()
    .then(results => {
        if (!results) {
            return res.status(404).json({ message: 'There are currently no resources' })
        } else {
            console.log(results)
            return res.status(200).json(results)
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to retrieve resources' })
    })
})

resource.post('/', (req, res) => {
    const { body } = req
    model.create(body)
    .then(results => {
        res.status(201).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create resource' })
    })
})

module.exports = resource