const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const logger = require('morgan');
const cors = require('cors');

require("dotenv").config();
require('./config/database');

const apiRouter = require('./routes/api')
const usersRouter = require('./routes/users')

const app = express();

//view engine

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
 //app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//MIGHT NOT WORK!
app.use('/api', apiRouter);
app.use('/users', usersRouter)

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on ${port}!`)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
    //set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render error page
    res.status(err.static || 500);
    res.render('error');
});

module.exports = app;