'use strict';

import { Router } from 'express';

const router = Router();

router.get('/account/register', (req, res) => {
  res.render('pages/auth/register', { title: 'Join Now and Start Reading' });
});

export default router;
