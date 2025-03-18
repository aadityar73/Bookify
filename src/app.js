'use strict';

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');

require('./db/mongoose');

// Import api routes
const userRouter = require('./routers/api/user');
const feedbackRouter = require('./routers/api/feedback');

// Import book routes
const fictionRouter = require('./routers/books/fiction');
const nonFictionRouter = require('./routers/books/nonFiction');
const businessRouter = require('./routers/books/business');
const fantasyRouter = require('./routers/books/fantasy');
const scienceFictionRouter = require('./routers/books/scienceFiction');
const memoirRouter = require('./routers/books/memoir');
const categoriesRouter = require('./routers/books/categories');
const historicalFictionRouter = require('./routers/books/historicalFiction');
const romanceRouter = require('./routers/books/romance');
const indianAuthorsRouter = require('./routers/books/indianAuthors');
const selfHelpRouter = require('./routers/books/selfHelp');
const youngAdultRouter = require('./routers/books/youngAdult');
const loginRouter = require('./routers/books/login');
const registerRouter = require('./routers/books/register');
const philosophyRouter = require('./routers/books/philosophy');
const psychologyRouter = require('./routers/books/psychology');
const mysteryRouter = require('./routers/books/mystery');
const favoritesRouter = require('./routers/books/favorites');

const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

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

// Use api routes
app.use(userRouter);
app.use(feedbackRouter);

// Use book routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'Your Literary Journey Awaits',
  });
});

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

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Oops! You seem lost. Let’s get you back on track!',
  });
});

module.exports = app;
