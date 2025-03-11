'use strict';

const express = require('express');

const router = new express.Router();

router.get('/nonFiction', (req, res) => {
  res.render('non-fiction', { title: 'Non-Fiction Books' });
});

module.exports = router;
