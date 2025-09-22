'use strict';

import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import expressLayouts from 'express-ejs-layouts';
import connectDB from './config/database.config.js';

// Import api routes
import feedbackRouter from './routes/feedback/feedback.routes.js';

// Import book routes
import booksRouter from './routes/books/books.routes.js';
import categoriesRouter from './routes/pages/categories.routes.js';

// Auth routes
import authRouter from './routes/auth/auth.routes.js';

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Helpers for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse incoming requests bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Setup EJS engine and views location
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup layout middleware
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Your Literary Journey Awaits',
    scripts: ['/js/home.js', '/js/feedback.js', '/js/script.js'],
  });
});

app.use('/categories', categoriesRouter);
app.use('/books', booksRouter);

app.use('/auth', authRouter);

app.use('/feedbacks', feedbackRouter);

// app.use((req, res) => {
//   res.render('pages/error/404', {
//     title: '404',
//     errorMessage: 'Oops! You seem lost. Let’s get you back on track!',
//   });
// });

export default app;
