"use strict";

// 引入模块
var express = require('express'); // 引入中间件


var middleware = require('./conf/middleware'); // 引入路由


var router = require('./router'); // 引入服务器


var server = require('./server'); // 创建应用程序


var app = express(); // 中间件

middleware(app); // 使用路由

router(app); // 服务器

server(app); // mock数据
// var mock = require('./router/mock');
// mock(app)