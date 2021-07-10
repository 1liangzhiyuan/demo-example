// 引入模块
let express = require('express');
// 引入path
let path = require('path');
// 根路径
let root = process.cwd();


// 接口
module.exports = app => {
    // mock数据
    app.use('/data/', (req, res, next) => {
        // console.log(req.url);
        // 添加拓展名
        // req.url += '.json';
        // 对url切割，
        var arr = req.url.split('?');
        // 对第一步添加拓展名
        arr[0] += '.json';
        // 合并成新的地址
        req.url = arr.join('?')
        // 必须执行next方法
        // console.log(req.url);
        // 进入下一个中间件
        next();
    }, express.static(path.join(root, './static/data/')))

    // axios.get('/data/home?color=red')


    // mock数据
    app.post('/admin/login', (req, res) => res.json({ errno: 0, data: { username: 'admin' } }))
    // app.post('/admin/login', (req, res) => res.json({ errno: 1, msg: '用户名或者密码错误', data: { username: 'admin' } }))
    app.post('/admin/manager/update', (req, res) => res.json({ errno: 0, data: { username: 'admin' } }))
    app.post('/admin/product/upload', (req, res) => res.json({ errno: 0 , data: '/static/img/item/01.jpg'}))
    app.post('/admin/product/create', (req, res) => res.json({ errno: 0 }))
    app.post('/admin/product/remove', (req, res) => res.json({ errno: 0 }))
    app.post('/admin/product/update', (req, res) => res.json({ errno: 0 }))

    // get请求静态化处理
    app.use('/admin/', (req, res, next) => {
        // 适配路径
        var arr = req.url.split('?');
        // 添加.json拓展名
        arr[0] += '.json';
        // 拼凑路径
        req.url = arr.join('?')
        // 进入下一项
        next();
    }, express.static(path.join(root, './static/data/')))
}