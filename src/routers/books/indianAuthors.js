'use strict';

const express = require('express');

const router = new express.Router();

router.get('/indianAuthors', (req, res) => {
  res.render('indian-authors', { title: 'Indian Authors Books' });
});

module.exports = router;
