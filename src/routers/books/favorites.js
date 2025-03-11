'use strict';

const express = require('express');

const router = new express.Router();

router.get('/favorites', (req, res) => {
  res.render('favorites', { title: 'Your favorites' });
});

module.exports = router;
