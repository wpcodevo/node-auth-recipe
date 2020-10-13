const path = require('path')
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db');
const userRoute = require('./modules/users/routes');
const AppError = require('./modules/utils/errors/appError');
const globalErrorHandler = require('./modules/utils/errors/errorController');
const viewsRoute = require('./modules/views/routes')

const app = express();

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'modules/views'))
app.use(express.static(path.join(__dirname, 'public')))


// Database
connectDB();

// Logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware
app.use(express.json());
app.use(cookieParser())

// Routes
app.use('/', viewsRoute)

app.use('/api/v1/users', userRoute);



// Unhandled routess
app.all('*', (req, res, next) => {
 return next(new AppError(`Cannot find ${req.originalUrl} on this server`));
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
