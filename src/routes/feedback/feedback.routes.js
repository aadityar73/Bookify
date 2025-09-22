import { Router } from 'express';
import { postFeedback } from './feedback.controller.js';
import requireAuth from '../../middlewares/auth.middleware.js';

const router = Router();

router.post('/', requireAuth, postFeedback);

export default router;
