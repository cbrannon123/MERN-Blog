const express = require('express');
const router = express.Router();
const User = require('../models/User')
const userCtrl = require('../controllers/users');

/*------------------- Public Routes -------------*/ 
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login)



/*------------------- Protected Routes -------------*/ 


module.exports = router;