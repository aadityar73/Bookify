'use strict';

import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

dotenv.config();

const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;

    next();
  } catch (err) {
    res.status(401).send('Please authenticate.');
  }
};

export default requireAuth;
