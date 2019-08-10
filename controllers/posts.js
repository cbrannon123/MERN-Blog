const Post = require('../models/Post');

module.exports = {
    getAllPosts,
    createPost,
    getOnePost,
    deletePost,
    updatePost,
    upvotePost,
    downvotePost,
    addComment

};

function getAllPosts(req, res) {
    Post.find({}).then(function (posts) {
        //console.log(posts);
        res.status(200).json(posts);
    });
}

function createPost(req, res) {
    Post.create(req.body).then((post) => res.status(200)
        .json(post));
}

function getOnePost(req, res) {
    Post.findById(req.params.id).then(function (post) {
        res.status(200).json(post);
    });
}

function updatePost(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body,
        { new: true }).then((post) => res.status(200)
            .json(post));
}

function deletePost(req, res) {
    Post.findByIdAndRemove(req.params.id).then(function (post) {
        res.status(200).json(post);
    })
}

function upvotePost(req, res) {
    Post.findById(req.params.id).then((post) => {
        post.upvotes += 1;
        post.save((post) => {
            res.status(200).json(post)
        })
    })
}

function downvotePost(req, res) {
    Post.findById(req.params.id).then((post) => {
        post.upvotes -= 1;
        post.save((post) => {
            res.status(200).json(post)
        })
    })
}

function addComment(req, res) {
    Post.findById(req.params.id).then((post) => {
        post.comments.push(req.body);
        post.save((post) => {
            res.status(200).json(post)
        })
    })
}