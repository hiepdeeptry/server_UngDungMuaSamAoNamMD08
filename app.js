var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var admin = require('firebase-admin');
// var firebase = require('firebase');


var loginRouter = require('./routes/login');
var sanPhamRouter = require('./routes/san_pham');
var donHangRouter = require('./routes/don_hang');
var khuyenMaiRouter = require('./routes/khuyen_mai');
var loaiHangRouter = require('./routes/loai_hang');
var thongBaoRouter = require('./routes/thong_bao');
var nguoiDungRouter = require('./routes/nguoi_dung');


// API

var sanPhamApiRouter = require('./routes/apis/san_pham.api');
var donHangApiRouter = require('./routes/apis/don_hang.api');
var khuyenMaiApiRouter = require('./routes/apis/khuyen_mai.api');
var loaiHangApiRouter = require('./routes/apis/loai_hang.api');
var thongBaoApiRouter = require('./routes/apis/thong_bao.api');
var nguoiDungApiRouter = require('./routes/apis/nguoi_dung.api');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', sanPhamRouter);
app.use('/auth', loginRouter);
app.use('/products',sanPhamRouter);
app.use('/orders',donHangRouter);
app.use('/vouchers',khuyenMaiRouter);
app.use('/categorys',loaiHangRouter);
app.use('/notifys',thongBaoRouter);
app.use('/users',nguoiDungRouter);

//API
app.use('/api/products',sanPhamApiRouter);
app.use('/api/orders',donHangApiRouter);
app.use('/api/vouchers',khuyenMaiApiRouter);
app.use('/api/categorys',loaiHangApiRouter);
app.use('/api/notifys',thongBaoApiRouter);
app.use('/api/users',nguoiDungApiRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
