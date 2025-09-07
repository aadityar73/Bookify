'use strict';

import { Router } from 'express';

const router = Router();

router.get('/fantasy', (req, res) => {
  res.render('fantasy', { title: 'Fantasy Books' });
});

export default router;
