// 引入模块
let express = require('express');

// 引入中间件
let middleware = require('./conf/middleware');
// 引入路由
let router = require('./router');
// 引入服务器
let server = require('./server');


// 创建应用程序
let app = express();

// 中间件
middleware(app)

// 使用路由
router(app)

// 服务器
server(app)


// mock数据
// var mock = require('./router/mock');
// mock(app)
