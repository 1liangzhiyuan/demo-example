// 引入模块
let express = require('express');
// 引入ejs
let ejs = require('ejs');
// 引入path
let path = require('path');
// 使用session
let session = require('express-session');
// 接收数据中间件
let bodyParser = require('body-parser');
// 引入静态化配置
let { STATICS } = require('./index');

// 根路径
let root = process.cwd();

// 接口
module.exports = app => {
    // 拓展名
    app.engine('.html', ejs.__express);
    // session
    app.use(session({
        secret: 'icketang',
        resave: false,
        saveUninitialized: true
    }))
    // 接收post请求提交的数据
    app.use(bodyParser.json())

    // 静态化
    // app.use('/static/', express.static(path.join(root, './static/')));
    // app.use('/favicon.ico', express.static(path.join(root, './static/favicon.ico')));
    // 批量处理
    for (let key in STATICS) {
        // '/static/': './static/',
        // key是匹配的路劲给，value是静态化的路径
        app.use(key, express.static(path.join(root, STATICS[key])));
    }
}
