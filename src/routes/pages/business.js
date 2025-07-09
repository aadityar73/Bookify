'use strict';

const express = require('express');

const router = new express.Router();

router.get('/business', (req, res) => {
  res.render('business', { title: 'Business Books' });
});

module.exports = router;
