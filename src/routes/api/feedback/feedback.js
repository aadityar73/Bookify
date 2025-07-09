'use strict';

const express = require('express');
const Feedback = require('../../models/feedback');
const auth = require('../../middleware/auth');

const router = new express.Router();

router.post('/feedbacks', auth, async (req, res) => {
  const { name, email } = req.user;
  const feedbackMsg = req.body.feedback;

  const feedback = new Feedback({ name, email, feedback: feedbackMsg });

  try {
    await feedback.save();
    res.status(201).send(feedback);
  } catch (err) {
    res.status(400).send({ error: 'Unable to submit feedback!' });
  }
});

module.exports = router;
