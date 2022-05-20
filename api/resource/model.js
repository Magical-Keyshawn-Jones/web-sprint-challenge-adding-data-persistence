// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

function getById(id) {
    return db('resources').where('resource_id', id).first()
}

async function create(change) {
    const [id] = await db('resources').insert(change)
    return getById(id)
}


module.exports = {
    getAll,
    create,
    getById,
}