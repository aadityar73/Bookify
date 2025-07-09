'use strict';

const express = require('express');

const router = new express.Router();

router.get('/youngAdult', (req, res) => {
  res.render('young-adult', { title: 'Young Adult Books' });
});

module.exports = router;
