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
    { project_name: 'Carol', project_description: 'I love this'},
    { project_name: 'Dining', project_description: 'Could be better'},
    { project_name: 'Daryl', project_description: ''},
    { project_name: 'Something', project_description: 'Not really'} ,
    { project_name: 'Movies', project_description: ''},
    { project_name: 'Yes sir', project_description: 'Tragic really'},
    { project_name: 'I dont care', project_description: 'Can I go home'},
    { project_name: 'Gaming', project_description: ''},
    { project_name: 'Cooking', project_description: 'Im never passing'},
  ])
};
