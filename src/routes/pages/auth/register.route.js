'use strict';

import { Router } from 'express';

const router = Router();

router.get('/account/register', (req, res) => {
  res.render('register', { title: 'Join Now and Start Reading' });
});

export default router;
