
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('users').insert([
        {id: 1, username: 'bh111', email: 'bmmm@gmail.com', password: 'pass'} 
      ]);
};
