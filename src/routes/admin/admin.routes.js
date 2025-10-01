import { Router } from 'express';
import requireAuth from '../../middlewares/auth.middleware.js';
import isAdmin from '../../middlewares/admin.middleware.js';
import { getAddBookPage, addBook } from './admin.controller.js';

const router = Router();

router.get('/books', requireAuth, isAdmin, getAddBookPage);
router.post('/books', requireAuth, isAdmin, addBook);

export default router;
