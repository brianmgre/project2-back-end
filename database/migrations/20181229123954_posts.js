
exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', posts => {
        posts
            .increments();
        posts
            .string('postText', 155)
            .notNullable();
        posts
            .string('tags');
        posts
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfTableExists('posts');
};