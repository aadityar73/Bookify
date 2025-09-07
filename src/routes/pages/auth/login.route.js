'use strict';

import { Router } from 'express';

const router = Router();

router.get('/account/login', (req, res) => {
  res.render('pages/auth/login', { title: 'Log into your account' });
});

export default router;
