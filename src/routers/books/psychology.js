'use strict';

const express = require('express');

const router = new express.Router();

router.get('/psychology', (req, res) => {
  res.render('psychology', { title: 'Psychology Books' });
});

module.exports = router;
