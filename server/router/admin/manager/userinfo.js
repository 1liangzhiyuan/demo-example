// 引入配置
let { MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json('success')
    // 判断session中否有用户信息
    if (req.session.username) {
        // 登录成功
        res.json({ errno: 0, data: req.session.username })
    } else {
        // 登录失败
        // res.json({ errno: 1, msg: '没有登录，请登录' })
        res.json(MESSAGE.login[1])
    }
}