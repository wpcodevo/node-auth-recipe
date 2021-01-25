import path from 'path';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import userRoute from './modules/users/routes.js';
import AppError from './modules/utils/errors/appError.js';
import globalErrorHandler from './modules/utils/errors/errorController.js';
import viewsRoute from './modules/views/routes.js';

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

console.log(`${__dirname}/modules/views`);

const app = express();

app.set('view engine', 'pug');
app.set('views', './modules/views');
app.use(express.static('./public'));

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

export default app;
