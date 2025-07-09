'use strict';

const express = require('express');

const router = new express.Router();

router.get('/historicalFiction', (req, res) => {
  res.render('historical-fiction', { title: 'Historical Fiction Books' });
});

module.exports = router;
