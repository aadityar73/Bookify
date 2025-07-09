'use strict';

const express = require('express');

const router = new express.Router();

router.get('/mystery', (req, res) => {
  res.render('mystery', { title: 'Mystery/Thriller Books' });
});

module.exports = router;
