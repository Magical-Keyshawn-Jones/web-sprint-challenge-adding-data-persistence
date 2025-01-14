// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll(id) {
    if (!id) {
        return db('projects')
    } else {
        return db('projects').where('project_id', id).first()
    }
}

async function create(change) {
    const [id] = await db('projects').insert(change)
    return getAll(id)
    // db('projects').insert(change)
    // .then(results => {
    //     const [id] = results.project_completed = Boolean(results.project_completed)
    //     return getAll(id)
    // })
}

module.exports = {
    getAll,
    create,
}
