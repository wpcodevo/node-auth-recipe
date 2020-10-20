import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import connectDB from './config/db';
import userRoute from './modules/users/routes';
import AppError from './modules/utils/errors/appError';
import globalErrorHandler from './modules/utils/errors/errorController';
import viewsRoute from './modules/views/routes';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'modules/views'));
app.use(express.static(path.join(__dirname, 'publics')));

// Database
connectDB();

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/', viewsRoute);

app.use('/api/v1/users', userRoute);

// Unhandled routess
app.all('*', (req, res, next) => {
  return next(new AppError(`Cannot find ${req.originalUrl} on this server`));
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;

console.log('hello');
