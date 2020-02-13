var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controller/userController.js');

/* GET users listing. */
router.post('/add', userController.createUser);

router.get('/list',userController.listUser
);

router.get('/read',
userController.readUser);

router.get('/token', userController.generateToken);

router.post('/update/:id', userController.updateUser);

module.exports = router;
