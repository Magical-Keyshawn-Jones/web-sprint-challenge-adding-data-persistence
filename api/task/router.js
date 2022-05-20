// build your `/api/tasks` router here
const model = require('./model')
const task = require('express').Router()

task.get('/', (req, res) => {
    model.getAll()
    .then(results => {
        results.forEach(thing => {
            thing.task_completed = Boolean(thing.task_completed)
            thing.project_completed = Boolean(thing.project_completed)
        })
        res.status(200).json(results)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to retrieve tasks' })
    })
})

task.post('/', (req, res) => {
    const { body } = req

    model.create(body)
    .then(results => {
        results.task_completed = Boolean(results.task_completed)
        res.status(201).json(results)
    })
    .catch(err => {
        console.log(err)
        console.log({ err })
        res.status(500).json({ message: `Failed to create task, ${err}` })
    })
})

module.exports = task