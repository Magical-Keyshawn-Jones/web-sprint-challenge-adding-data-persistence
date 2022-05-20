// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll(id) {
    if (!id) {
        return db('tasks')
    } else {
        return db('tasks')
        .join('projects')
        // .select('projects')
        .where('task_id',id)
    }
}

function getTask(id) {
    if (!id) {
        return db('tasks')
    } else {
        return db('tasks').where('task_id', id).first()
    }
}

async function create(body) {
    const [id] = await db('tasks').insert(body)
    return getTask(id)
}

module.exports = {
    getAll, 
    create,
}