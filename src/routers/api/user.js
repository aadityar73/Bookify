'use strict';

const express = require('express');
const User = require('../../models/user');
const auth = require('../../middleware/auth');
const sendWelcomeEmail = require('../../emails/account');

const router = new express.Router();

// User Signup
router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();

    sendWelcomeEmail(user.email, user.name);

    const token = await user.generateAuthToken();

    res
      .status(201)
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// User Login
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateAuthToken();

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000,
      })
      .send(user);
  } catch (err) {
    res.status(400).send({ error: 'Unable to login!' });
  }
});

// User Logout
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      token => token.token !== req.token
    );
    await req.user.save();

    res.clearCookie('token').status(200).send('Logged out successfully');
  } catch (err) {
    res.status(500).send();
  }
});

// User Logout All
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.clearCookie('token').status(200).send('Logged out from all devices');
  } catch (err) {
    res.status(500).send();
  }
});

// Get profile
router.get('/users/me', auth, async (req, res) => {
  try {
    res.status(200).send({ name: req.user.name, email: req.user.email });
  } catch (error) {
    res.status(401).send({ error: 'Not authenticated' });
  }
});

module.exports = router;
