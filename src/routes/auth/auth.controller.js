import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';

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

    // Create new user
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).redirect('/auth/login');
  } catch (err) {
    return res.status(400).send(err);
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

export { getRegister, postRegister, getLogin, postLogin, logout, getMe };
