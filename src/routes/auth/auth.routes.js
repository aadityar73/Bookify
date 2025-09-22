import { Router } from 'express';
import {
  getRegister,
  postRegister,
  // verifyEmail,
  getLogin,
  postLogin,
  logout,
  getMe,
} from './auth.controller.js';
import requireAuth from '../../middlewares/auth.middleware.js';

const router = Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
// router.get('/verify-email', verifyEmail);

router.get('/login', getLogin);
router.post('/login', postLogin);

router.get('/logout', logout);
router.post('/logout', logout);

router.get('/me', requireAuth, getMe);

export default router;
