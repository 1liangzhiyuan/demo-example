// 接口
module.exports = (req, res) => {
    // res.json('success')
    // 删除用户的登录标志，返回首页，让用户登录
    delete req.session.username;
    // 重定向
    res.redirect('/admin')
}