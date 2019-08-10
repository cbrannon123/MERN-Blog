const Post = require('../models/Post');

module.exports = {
    getAllPosts,
    createPost,
    getOnePost,
    deletePost,
};

function getAllPosts(req, res) {
    Post.find({}).then(function(posts) {
      //console.log(posts);
      res.status(200).json(posts);
    });
  }

function createPost(req, res) {
    Post.create(req.body).then((post) => res.status(200)
    .json(post));
}

function getOnePost(req, res) {
    Post.findById(req.params.id).then(function(post) {
      res.status(200).json(post);
    });
  }

  function deletePost(req, res) {
    Post.findByIdAndRemove(req.params.id).then(function(post){
        res.status(200).json(post);
    })
  }