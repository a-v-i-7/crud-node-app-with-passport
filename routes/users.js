var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controller/userController.js');

/* GET users listing. */
router.post('/add', userController.createUser);

router.get('/list',userController.listUser
);

router.get('/read',  passport.authenticate('jwt', {session: false}),
userController.readUser);

router.get('/token', userController.generateToken);

module.exports = router;
