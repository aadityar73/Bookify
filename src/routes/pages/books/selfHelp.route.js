'use strict';

const express = require('express');

const router = new express.Router();

router.get('/selfHelp', (req, res) => {
  res.render('self-help', { title: 'Self-Help Books' });
});

module.exports = router;
