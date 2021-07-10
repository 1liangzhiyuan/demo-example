// 配置路由的第二种方式
let { Router } = require('express');
// 引入后台管理系统页面的路由实现方法
let admin = require('./admin');
let home = require('./home');

// 定义路由
let router = new Router();
// 配置路径
router.get('/', home)
router.get('/admin', admin)

// 暴露接口
module.exports = router;