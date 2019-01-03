
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', cmts =>{
      cmts
        .increments();
    cmts
        .string('comment', 155)
        .notNullable();
        cmts
        .integer('posts_id')
        .unsigned()
        .references('id')
        .intable('posts')
        .notNullable();
    cmts
        .integer('user_id')
        .unsigned()
        .references('id')
        .intable('users')
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfTableExists(comments)
};
