const Post = require('../models/Post');

module.exports = {
    createPost,
};

function createPost(req, res) {
    Post.create(req.body).then((post) => res.status(200)
    .json(post));
}