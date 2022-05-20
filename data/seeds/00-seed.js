exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'Daryl'},
    {resource_name: 'Carole', resource_description: 'Will make you generous'},
    {resource_name: 'Doggo'}
  ]);

  await knex('projects').truncate()
  await knex('projects').insert([
    { project_name: 'Carol'}, { project_name: 'Dining'},
    { project_name: 'Daryl'},
    { project_name: 'Something'}, { project_name: 'Movies'},
    { project_name: 'Yes sir'},
    { project_name: 'I dont care'},
    { project_name: 'Gaming'},
    { project_name: 'Cooking'},
  ])
};
