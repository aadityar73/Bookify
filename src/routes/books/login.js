'use strict';

const express = require('express');

const router = new express.Router();

router.get('/account/login', (req, res) => {
  res.render('login', { title: 'Log into your account' });
});

module.exports = router;
