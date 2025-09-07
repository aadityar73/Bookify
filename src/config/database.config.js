'use strict';

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
