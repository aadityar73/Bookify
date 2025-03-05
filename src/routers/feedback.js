'use strict';

const express = require('express');
const Feedback = require('../models/feedback');

const router = new express.Router();

router.post('/feedbacks', async (req, res) => {
  const feedback = new Feedback(req.body);

  try {
    await feedback.save();
    res.status(201).send({ message: 'Feedback submitted successfully!' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
