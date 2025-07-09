'use strict';

const express = require('express');

const router = new express.Router();

router.get('/categories', (req, res) => {
  res.render('categories', { title: 'Categories' });
});

module.exports = router;
