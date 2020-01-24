const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const passport = require('passport');

// router.post('/', (req, res) => {
//   if (!req.body.username || !req.body.password) {
//     res.status(400).send({ error: 'Please enter correct username and password'});
//   }
//   else if (req.body.username && req.body.password) {
//   userController.validateUser(req, res);
//   }
// });
router
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Welcome to login page'});
})
router.post('/', passport.authenticate('local'), userController.loginUser);

module.exports = router;