'use strict';

const express = require('express');

const router = new express.Router();

router.get('/romance', (req, res) => {
  res.render('romance', { title: 'Romance Books' });
});

module.exports = router;
