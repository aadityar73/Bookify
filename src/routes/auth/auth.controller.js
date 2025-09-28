import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';
import {
  sendVerificationMail,
  sendVerifiedMail,
} from '../../services/email.service.js';

const getRegister = (req, res) => {
  res.render('auth/register', {
    title: 'Join Now and Start Reading',
    authPage: true,
    isRegisterPage: true,
  });
};

const postRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).send('All fields are required!');
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists!');
    }

    // Generate token
    const token = crypto.randomBytes(32).toString('hex');

    // Create new user
    const user = new User({
      name,
      email,
      password,
      verificationToken: token,
      verificationTokenExpiry: Date.now() + 1000 * 60 * 60 * 6,
    });
    await user.save();

    await sendVerificationMail(email, name, token);

    res.status(201).redirect('/auth/login');
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token, email } = req.query;

    const user = await User.findOne({ email, verificationToken: token });

    if (!user) return res.status(404).send('Invalid verification link');

    if (user.verificationTokenExpiry < Date.now()) {
      return res.status(400).send('Verification link expired');
    }

    user.isVerified = true;
    user.verificationToken = token;
    user.verificationTokenExpiry = undefined;

    await user.save();

    await sendVerifiedMail(user.email, user.name);

    res.send('✅ Email verified successfully! You can now log in.');
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
};

const getLogin = (req, res) => {
  res.render('auth/login', { title: 'Log into your account', authPage: true });
};

const setAuthCookie = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  const isProd = process.env.NODE_ENV === 'production';

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send('All fields are required!');
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('Invalid credentials!');

    const ok = await user.matchPassword(password);
    if (!ok) return res.status(401).send('Invalid credentials!');

    if (!user.isVerified)
      return res
        .status(401)
        .send('Please verify your email before logging in.');

    setAuthCookie(res, user._id);
    return res.redirect('/');
  } catch (err) {
    res.status(400).send(err);
  }
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

const getMe = (req, res) => {
  const user = req.user;

  res.json({
    name: user.name,
    email: user.email,
  });
};

export {
  getRegister,
  postRegister,
  verifyEmail,
  getLogin,
  postLogin,
  logout,
  getMe,
};
