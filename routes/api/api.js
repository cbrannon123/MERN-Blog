const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
var usersCtrl = require('../../controllers/users');


/*------------------- Public Routes -------------*/ 
router.get('/posts', postsCtrl.getAllPosts);
router.get('/posts/:id', postsCtrl.getOnePost);
router.delete('/posts/:id', postsCtrl.deletePost);
router.put('/posts/:id/upvote', postsCtrl.upvotePost);
router.put('/posts/:id/downvote', postsCtrl.downvotePost);
router.post('/posts/:id/comments', postsCtrl.addComment)
router.post('/posts', postsCtrl.createPost);
router.put('/posts/:id', checkAuth, postsCtrl.updatePost);




/*------------------- Protected Routes -------------*/ 
router.use(require('../../config/auth'))


/*---------------- helper function ------------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;
