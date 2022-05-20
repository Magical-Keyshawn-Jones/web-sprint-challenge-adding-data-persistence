// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
    // return db('projects').select('project_name', 'project_description')
        return db('tasks as t')
        // .join('projects as p', 'project_resources as D')
        .join('projects as p', 't.task_id', '=', 'p.project_id')
        .select('t.task_notes', 't.task_description', 't.task_completed', 'p.project_name', 'p.project_description')
        // .where('t.task_id', 'p.project_id')
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