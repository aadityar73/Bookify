'use strict';

import { Router } from 'express';

const router = Router();

router.get('/account/login', (req, res) => {
  res.render('login', { title: 'Log into your account' });
});

export default router;
