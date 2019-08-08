const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');


/*------------------- Public Routes -------------*/ 



/*------------------- Protected Routes -------------*/ 
router.use(require('../../config/auth'))
router.get('/posts', checkAuth, postsCtrl.createPost);


/*---------------- helper function ------------*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;
