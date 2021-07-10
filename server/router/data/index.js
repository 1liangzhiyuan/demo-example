// 引入express
let { Router } = require('express');

// 实例化
module.exports = new Router()
    // 首页接口
    .get('/data/home', require('./home'))
    // 列表页接口
    .get('/data/list', require('./list'))
    // 搜索
    .get('/data/search', require('./search'))
    // 排序
    .get('/data/order', require('./order'))
    // 商品详情
    .get('/data/detail', require('./detail'))