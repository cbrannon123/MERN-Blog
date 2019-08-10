const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');


/*------------------- Public Routes -------------*/ 
router.get('/posts', postsCtrl.getAllPosts);
router.get('/posts/:id', postsCtrl.getOnePost);
router.post('/posts', postsCtrl.createPost);
router.delete('/posts/:id', postsCtrl.deletePost);
router.put('/posts/:id', postsCtrl.updatePost);
router.put('/posts/:id/upvote', postsCtrl.upvotePost);
router.put('/posts/:id/downvote', postsCtrl.downvotePost);



/*------------------- Protected Routes -------------*/ 
router.use(require('../../config/auth'))


/*---------------- helper function ------------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;
