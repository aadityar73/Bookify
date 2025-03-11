'use strict';

const express = require('express');

const router = new express.Router();

router.get('/scienceFiction', (req, res) => {
  res.render('science-fiction', { title: 'Science Fiction Books' });
});

module.exports = router;
