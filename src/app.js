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
import fictionRouter from './routes/pages/books/fiction.route.js';
import nonFictionRouter from './routes/pages/books/nonFiction.route.js';
import businessRouter from './routes/pages/books/business.route.js';
import fantasyRouter from './routes/pages/books/fantasy.route.js';
import scienceFictionRouter from './routes/pages/books/scienceFiction.route.js';
import memoirRouter from './routes/pages/books/memoir.route.js';
import categoriesRouter from './routes/pages/books/categories.route.js';
import historicalFictionRouter from './routes/pages/books/historicalFiction.route.js';
import romanceRouter from './routes/pages/books/romance.route.js';
import indianAuthorsRouter from './routes/pages/books/indianAuthors.route.js';
import selfHelpRouter from './routes/pages/books/selfHelp.route.js';
import youngAdultRouter from './routes/pages/books/youngAdult.route.js';
import philosophyRouter from './routes/pages/books/philosophy.route.js';
import psychologyRouter from './routes/pages/books/psychology.route.js';
import mysteryRouter from './routes/pages/books/mystery.route.js';
import favoritesRouter from './routes/pages/books/favorites.route.js';

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

// Use api routes
app.use(userRouter);
app.use(feedbackRouter);

app.use(fictionRouter);
app.use(nonFictionRouter);
app.use(historicalFictionRouter);
app.use(scienceFictionRouter);
app.use(romanceRouter);
app.use(selfHelpRouter);
app.use(youngAdultRouter);
app.use(mysteryRouter);
app.use(memoirRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(philosophyRouter);
app.use(psychologyRouter);
app.use(businessRouter);
app.use(fantasyRouter);
app.use(indianAuthorsRouter);
app.use(categoriesRouter);
app.use(favoritesRouter);

// app.get('/*', (req, res) => {
//   res.render('404', {
//     title: '404',
//     errorMessage: 'Oops! You seem lost. Let’s get you back on track!',
//   });
// });

export default app;
