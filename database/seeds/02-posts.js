
exports.seed = function (knex) {
  return knex('posts').insert([
    { id: 1, postText: 'this is a test post 1' },
    { id: 2, postText: 'this is a test 2' },
    { id: 3, postText: 'this test 3 ' }
  ]);
};
