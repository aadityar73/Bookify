import { Router } from 'express';
import { getRegister, getLogin } from './auth.controller.js';

const router = Router();

router.get('/register', getRegister);
router.get('/login', getLogin);

export default router;
