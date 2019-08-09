const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');


/*------------------- Public Routes -------------*/ 
router.get('/posts', postsCtrl.getAllPosts);

router.post('/posts', postsCtrl.createPost);


/*------------------- Protected Routes -------------*/ 
router.use(require('../../config/auth'))


/*---------------- helper function ------------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    console.log('heelo from auth')
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;