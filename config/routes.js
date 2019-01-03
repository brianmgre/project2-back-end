const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig.js');


module.exports = server => {
    server.get('/api/posts', getPosts);
    server.get('/api/post/:id', postComments);
    server.post('/api/create', newPost);
    server.post('/api/new/comment', newComment);
    server.delete('/api/remove/:id', deletePost);
    server.put('/api/edit/:id', editPost);
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

function editPost(req, res) {
    const { id } = req.params;
    const { postText } = req.body;
    db('posts')
        .where({ id })
        .first()
        .update(req.body)
        .then(post => {
            post
                ? res.status(200).json(req.body)
                : res.status(404).json({ message: `post not found` })
        })
        .catch(err => {
            res.status(500).json({ message: `error`, err })
        });
};

function postComments(req, res) {
    const { id } = req.params;
    db('posts')
        .where({ id })
        .first()
        .then(post => {
            if (post) {
                db('comments')
                    .where({ post_id: id })
                    .then(comment => {
                        post.comment = comment
                        console.log(post);
                        res.status(200).json(post)
                    })
                    .catch(err => {
                        res.status(422).json({ message: `id not found`, err })
                    })
            } else {
                res.status(500).json(err)
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
};

function newComment(req, res) {
    const { comment, user_id, post_id } = req.body;
    db('comments')
        .insert(req.body)
        .then(ids => {
            res.status(201).json(ids)
        })
        .catch(err => {
            res.status(500).json(err)
        });
};