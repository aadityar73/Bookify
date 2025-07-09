'use strict';

const express = require('express');

const router = new express.Router();

router.get('/philosophy', (req, res) => {
  res.render('philosophy', { title: 'Philosophy Books' });
});

module.exports = router;
