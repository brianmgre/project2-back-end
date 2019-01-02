
exports.seed = function (knex) {
  return knex('posts').insert([
    { postText: 'this is a test post 1', user_id: 1  },
    {postText: 'this is a test 2', user_id: 1  },
    { postText: 'this test 3 ', user_id: 1 }
  ]);
};
