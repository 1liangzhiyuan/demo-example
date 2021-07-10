// 路由中间件
let { Router } = require('express');

// 实例化
module.exports = new Router()
    // 查询用户信息
    .get('/admin/userinfo', require('./manager/userinfo'))
    // 用户退出
    .get('/admin/logout', require('./manager/logout'))
    // 商品列表
    .get('/admin/product/list', require('./product/list'))
    // 商品详情
    .get('/admin/product/detail', require('./product/detail'))

    // 登录接口
    .post('/admin/login', require('./manager/login'))
    // 修改用户名和密码
    .post('/admin/manager/update', require('./manager/update'))
    // 上传图片
    .post('/admin/product/upload', require('./product/upload'))
    // 创建商品
    .post('/admin/product/create', require('./product/create'))
    // 更新商品
    .post('/admin/product/update', require('./product/update'))
    // 删除商品
    .post('/admin/product/remove', require('./product/remove'))