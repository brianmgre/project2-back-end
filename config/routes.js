const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');


module.exports = server => {
    server.get('/api/post', getPosts);
}


function getPosts(req, res) {
    db('posts')
        .then(post => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json(err)
        })
};