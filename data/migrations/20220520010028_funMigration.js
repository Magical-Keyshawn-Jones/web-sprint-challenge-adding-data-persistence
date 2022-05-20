exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {
      table.increments('project_id')
      table.varchar('project_name').notNullable()
      table.varchar('project_description')
      table.integer('project_completed').defaultTo(0) //(integer 0)?
  })

  await knex.schema.createTable('resources', table => {
      table.increments('resource_id')
      table.varchar('resource_name').notNullable().unique()
      table.varchar('resource_description')
  })

  await knex.schema.createTable('tasks', table => {
      table.increments('task_id')
      table.varchar('task_description').notNullable()
      table.varchar('task_notes')
      table.integer('task_completed').defaultTo(0)
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })

  await knex.schema.createTable('project_resources', table => {
      table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('resource_id')
      .inTable('resources')
      .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.primary(['project_id', 'resource_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('resources')
  await knex.schema.dropTableIfExists('tasks')
  await knex.schema.dropTableIfExists('projects')
  await knex.schema.dropTableIfExists('project_resources')
};

//////////////////////

// exports.up = async function(knex) {
//   await knex.schema.createTable('projects', table => {
//       table.increments('project_id')
//       table.varchar('project_name').notNullable()
//       table.varchar('project_description')
//       table.varchar('project_completed').defaultTo('false') //(integer 0)?
//   })

//   await knex.schema.createTable('resources', table => {
//       table.increments('resource_id')
//       table.varchar('resource_name').notNullable().unique()
//       table.varchar('resource_description')
//   })

//   await knex.schema.createTable('tasks', table => {
//       table.increments('task_id')
//       table.varchar('task_description').notNullable()
//       table.varchar('task_notes')
//       table.varchar('task_completed').defaultTo('false')
//       table.integer('project_id')
//       .unsigned()
//       .notNullable()
//       .references('project_id')
//       .inTable('projects')
//   })

//   await knex.schema.createTable('project_resources', table => {
//       table.integer('project_id')
//       .unsigned()
//       .notNullable()
//       .references('project_id')
//       .inTable('projects')
//       table.integer('resource_id')
//       .unsigned()
//       .notNullable()
//       .references('resource_id')
//       .inTable('resources')
//   })
// };

// exports.down = async function(knex) {
//   await knex.schema.dropTableIfExists('projects')
//   await knex.schema.dropTableIfExists('resources')
//   await knex.schema.dropTableIfExists('tasks')
//   await knex.schema.dropTableIfExists('project_resources')
// };
