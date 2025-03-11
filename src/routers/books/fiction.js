'use strict';

const express = require('express');

const router = new express.Router();

router.get('/fiction', (req, res) => {
  res.render('fiction', { title: 'Fiction Books' });
});

module.exports = router;
