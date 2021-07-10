// 引入工具方法
let { db, MESSAGE } = require('../../tools');
// 暴露接口
module.exports = (req, res) => {
    // res.json('hello')
    // console.log(db);
    // 插入一条测试数据
    // db.collection('manager').insertOne({ username: 'admin', password: 'a123' })
    // console.log(req.body)
    // 查询数据库
    db.collection('manager')
        // 查询数据
        .findOne(req.body)
        // 结果
        .then(({ username }) => {
            // 登录成功
            // 更新session
            req.session.username = username
            // 返回结果
            res.json({
                errno: 0,
                data: { username }
            })
        })
        // 失败
        .catch(({ errno }) => {
            // if (errno === 1) {
            //     res.json({ errno, msg: '连接数据库失败' })
            // } else if (errno === 2) {
            //     res.json({ errno, msg: '查询错误' })
            // } else {
            //     res.json({ errno, msg: '用户名或者密码错误' })
            // }
            if (errno === 3) {
                res.json(MESSAGE.login[0])
            } else {
                res.json(MESSAGE.find[errno])
            }
        })
}