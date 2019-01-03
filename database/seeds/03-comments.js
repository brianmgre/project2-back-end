
exports.seed = function (knex, Promise) {
  return knex('comments').insert([
    { comment: 'nope', user_id: 1, post_id: 1 },
    { comment: 'yup', user_id: 1, post_id: 2 },
    { comment: 'maybe', user_id: 1, post_id: 3 },
    { comment: 'sure', user_id: 1, post_id: 3 }
  ]);
};
