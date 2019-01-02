const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');


module.exports = server => {
    server.get('/api/posts', getPosts);
    server.post('/api/create', newPost);
    server.delete('/api/remove/:id', deletePost);
}


function getPosts(req, res) {
    db('posts')
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json(err)
        })
};

function newPost(req, res) {
    const { postText, user_id } = req.body;
    if (!postText || !user_id) {
        res.status(422).json({ message: `post required & must be a user` })
    } else {
        db('posts')
            .insert(req.body)
            .then(ids => {
                res.status(201).json(ids)
            })
            .catch(err => {
                res.status(500).json(err)
            });
    };
};

function deletePost(req, res) {
    const { id } = req.params;
    db('posts')
        .where({ id })
        .del()
        .then(count => {
            res.status(200).json(count)
        })
        .catch(err => {
            res.status(500).json(err)
        });
};