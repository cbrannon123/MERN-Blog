const Post = require('../models/Post');

module.exports = {
    createPost,
    getAllPosts,
};

function createPost(req, res) {
    Post.create(req.body).then((post) => res.status(200)
    .json(post));
}

function getAllPosts(req, res) {
    Post.find({}).then(function(posts) {
      console.log(posts);
      res.status(200).json(posts);
    });
  }