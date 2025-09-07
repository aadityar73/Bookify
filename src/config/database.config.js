'use strict';

import dotenv from 'dotenv';

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
