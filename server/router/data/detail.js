// 引入数据库
let { db } = require('../tools');
// 接口
module.exports = (req, res) => {
    // 获取id
    // 操作数据库
    db.collection('product')
        // 查询
        .findOne({ _id: req.query.id })
        // 返回结果
        .then(
            // 成功
            data => res.json(data),
            // 失败
            err => res.json({})
        )
}