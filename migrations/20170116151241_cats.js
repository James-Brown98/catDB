
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', table => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('story')
    table.integer('age')
    table.integer('lives')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
};
