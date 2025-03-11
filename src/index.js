'use strict';

const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

require('./db/mongoose');

const userRouter = require('./routers/user');
const feedbackRouter = require('./routers/feedback');

const app = express();
const port = process.env.PORT;

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public');
const pagesDirectory = path.join(publicDirectory, '/pages');

// Setup static directory to serve
app.use(express.static(publicDirectory));
app.use(express.static(pagesDirectory));

// Serve up JSON data sent by the client to the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(userRouter);
app.use(feedbackRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));
