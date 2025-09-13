'use strict';

import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const getTokenFromCookie = req => req.cookies?.token;

const requireAuth = async (req, res, next) => {
  try {
    const token = getTokenFromCookie(req);
    if (!token) return res.status(401).json({ message: 'Unauthorized!' });

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.id).select('-password');

    if (!user) return res.status(401).json({ message: 'Unauthorized!' });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default requireAuth;
