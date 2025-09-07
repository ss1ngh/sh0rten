import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import urlRoutes from './src/routes/urlRoutes.js';
import { redirectFromShortUrl } from './src/controller/redirectController.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));

connectDB();

app.use(express.json());

app.use('/api', urlRoutes);
app.get('/:shortId', redirectFromShortUrl);

module.exports = app;