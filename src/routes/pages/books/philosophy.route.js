'use strict';

import { Router } from 'express';

const router = Router();

router.get('/philosophy', (req, res) => {
  res.render('philosophy', { title: 'Philosophy Books' });
});

export default router;
