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

router.get('/', )
router.post('/', passport.authenticate('local'), userController.loginUser);

module.exports = router;