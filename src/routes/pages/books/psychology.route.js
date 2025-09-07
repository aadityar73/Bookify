'use strict';

import { Router } from 'express';

const router = Router();

router.get('/psychology', (req, res) => {
  res.render('psychology', { title: 'Psychology Books' });
});

export default router;
