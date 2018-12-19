// 创建HTTP错误
var createError = require('http-errors');
// 引入express模块
var express = require('express');
// 引入path模块,该模块包括了一些处理文件路径的功能
var path = require('path');
// cookie操作中间件
var cookieParser = require('cookie-parser');
// HTTP请求日志中间件
var logger = require('morgan');

// 自定义路由模块的引用
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建实例
var app = express();

// 设置views的目录,__dirname全局变量表示当前执行脚本所在的目录
app.set('views', path.join(__dirname, 'views'));
// 设置渲染引擎
app.set('view engine', 'pug');

// 日志设置
app.use(logger('dev'));
// 解析JSON格式的post参数
app.use(express.json());
// 解析urlencoeded编码的post参数，URLEncoded编码中,所有的字符均为ANSCII码
app.use(express.urlencoded({ extended: false }));
// cookie设置
app.use(cookieParser());
// 静态目录设置
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 捕捉404错误并进行错误处理
app.use(function(req, res, next) {
  next(createError(404));
});

// HTTP错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
