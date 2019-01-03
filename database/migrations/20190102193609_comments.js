
exports.up = function (knex, Promise) {
    return knex.schema.createTable('comments', comments => {
        comments
            .increments();
        comments
            .string('comment', 155)
            .notNullable();
        comments
            .integer('post_id')
            .unsigned()
            .references('id')
            .inTable('posts')
            .notNullable();
        comments
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfTableExists('comments')
};
