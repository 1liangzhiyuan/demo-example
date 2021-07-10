// 引入路由
let page = require('./page');
let admin = require('./admin');
// 引入移动端路由中间件
let data = require('./data');

// 接口
module.exports = app => {
    // 直接安装
    app.use(page);
    // 后台管理系统的路由中间件
    app.use(admin)
    // 安装
    app.use(data);
}


// 接口
// module.exports = app => {
//     // 定义路由
//     // app.get('/', (req, res) => {
//     //     // res.render('index.html')
//     //     res.render('home.html')
//     // })
//     // // 后台管理系统
//     // app.get('/admin', (req, res) => {
//     //     res.render('admin.html')
//     // })

//     // 配置路由的第二种方式
//     // var { Router } = require('express');
//     // // 定义路由
//     // var router = new Router();
//     // // 配置路径
//     // router.get('/admin', (req, res) => {
//     //     res.render('admin.html')
//     // })
//     // 安装路由
//     // app.use(router)
// }
