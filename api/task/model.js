// build your `Task` model here
const db = require('../../data/dbConfig')
// You are just not returning the data exact as requested ...  both in data object and status. I recommend that do one line at a time, and I don't think your join on line 6 is correct.
function getAll() {

    return db('tasks as t')
    .leftJoin('project_resources as d')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')

    // .leftJoin('projects as p')
    // .leftJoin('project_resources as d')


    // .join('project_resources as d')
    // .join('projects as p', 'p.project_id', 't.project_id')
    // .select('p.project_name', 'p.project_description', 't.task_notes', 't.task_description')
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