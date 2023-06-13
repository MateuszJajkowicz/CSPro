import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewere/errorMiddlewere.js';
import nadesRoutes from './routes/nadesRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use('/api/nades', nadesRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
