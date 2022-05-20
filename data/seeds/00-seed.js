exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'Daryl'},
    {resource_name: 'Carole', resource_description: 'Will make you generous'},
    {resource_name: 'Doggo'}
  ]);
};
