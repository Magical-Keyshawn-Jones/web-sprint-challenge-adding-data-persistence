// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('tasks')

        // return db('tasks')
        // .join('projects')
        // .limit(3)
        
        // return db('tasks as t')
        // .join('projects as p')
        // .join('projects as p', 'p.project_id', '=', 't.task_id')
        // .select('p.project_name', 'p.project_description', 't.task_notes', 't.task_description')
        // .limit(3)


        // .join('project_resources as d', 't.task_id', '=', 'd.project_id')
}

function getTask(id) {
        return db('tasks').where('task_id', id).first()
}

async function create(body) {
    const result = await db('tasks').insert(body)
    return getTask(result[0])
}

module.exports = {
    getAll, 
    create,
}