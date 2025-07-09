'use strict';

const express = require('express');

const router = new express.Router();

router.get('/biography', (req, res) => {
  res.render('memoir', { title: 'Biography/Memoir Books' });
});

module.exports = router;
