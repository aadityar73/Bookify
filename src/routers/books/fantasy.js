'use strict';

const express = require('express');

const router = new express.Router();

router.get('/fantasy', (req, res) => {
  res.render('fantasy', { title: 'Fantasy Books' });
});

module.exports = router;
