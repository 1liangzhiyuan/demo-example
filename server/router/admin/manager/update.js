// 引入数据库对象
let { db, MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json('success')
    // 获取服务器端存储的用户名，
    if (req.session.username) {
        // 用用户名作为查询条件更新提交的数据，并返回结果
        db.updateOne({ username: req.session.username }, { $set: req.body })
            // 监听结果
            .then(
                // 成功
                () => {
                    // 注销登录
                    delete req.session.username;
                    // console.log(data);
                    // res.json({ errno: 0 })
                    res.json(MESSAGE.update[0])
                },
                // 失败
                ({ errno }) => {
                    // console.log(err);
                    // 判断错误码
                    // if (errno === 1) {
                    //     res.json({ errno, msg: '连接数据失败' })
                    // } else if (errno === 2) {
                    //     res.json({ errno, msg: '操作失败' })
                    // } else {
                    //     res.json({ errno, msg: '没有更新数据' })
                    // }
                    res.josn(MESSAGE.update[errno])
                }
            )
    } else {
        // 没有登录
        res.json({ errno: 1, msg: '用户没有登录，请登录！'})
    }
}