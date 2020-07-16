const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/signup', userController.user_signup);

router.post('/login');

router.delete('/:userId');

/** Signup and Signin Routes handling */
module.exports = router;