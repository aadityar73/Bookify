'use strict';

import { Router } from 'express';

const router = Router();

router.get('/business', (req, res) => {
  res.render('business', { title: 'Business Books' });
});

export default router;
