'use strict';

import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import hbs from 'hbs';
import connectDB from './config/database.config.js';

// Import api routes
import userRouter from './routes/api/user/user.route.js';
import feedbackRouter from './routes/api/feedback/feedback.route.js';

// Import book routes
import booksRouter from './routes/books/books.routes.js';
import categoriesRouter from './routes/pages/categories.routes.js';

// Auth routes
import loginRouter from './routes/pages/auth/login.route.js';
import registerRouter from './routes/pages/auth/register.route.js';

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Helpers for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths for Express config
const publicDirectory = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');
const partialsPath = path.join(__dirname, 'views/includes');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectory));

// Serve up JSON data sent by the client to the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Use book routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'Your Literary Journey Awaits',
  });
});

app.use('/categories', categoriesRouter);
app.use('/books', booksRouter);

app.use(registerRouter);
app.use(loginRouter);

// Use api routes
app.use(userRouter);
app.use(feedbackRouter);

// app.get('/*', (req, res) => {
//   res.render('404', {
//     title: '404',
//     errorMessage: 'Oops! You seem lost. Let’s get you back on track!',
//   });
// });

export default app;
