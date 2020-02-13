const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.post('/', (req, res) => {
//   if (!req.body.username || !req.body.password) {
//     res.status(400).send({ error: 'Please enter correct username and password'});
//   }
//   else if (req.body.username && req.body.password) {
//   userController.validateUser(req, res);
//   }
// });
router.get('/signup', (req, res) =>{
  res.render('signup');
} )
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Welcome to login page'});
})
router.post('/login', passport.authenticate('local'), userController.loginUser);

module.exports = router;
module.exports = router;
