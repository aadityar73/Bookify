'use strict';

const express = require('express');

const router = new express.Router();

router.get('/account/register', (req, res) => {
  res.render('register', { title: 'Join Now and Start Reading' });
});

module.exports = router;
