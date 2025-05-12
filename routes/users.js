const express = require('express');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const users = require('../controllers/users');

router.get('/register', users.renderRegister);

router.post('/register', catchAsync(users.register))

router.get('/logout', users.logout); 

router.get('/login', users.renderLogin)

router.post('/login', storeReturnTo,  passport.authenticate('local',{failureRedirect: '/login', failureFlash: true }), users.login)

module.exports = router;