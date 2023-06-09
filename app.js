const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const photoRouter = require('./routes/photo');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware: no path->
//run for every request that reaches this line

app.use((req, res, next) => {

  console.log(req.cookies.user);

  if (req.query.uname != undefined) {
    req.login = {
      username: req.query.uname.toLowerCase().trim(),
      auth: true
    };
  } else {
    req.login = {
      username: null,
      auth: false
    };
  }

  next();
});

app.use('/', indexRouter);
app.use('/books/', booksRouter);
app.use('/photo/', photoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
