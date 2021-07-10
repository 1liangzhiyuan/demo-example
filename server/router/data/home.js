// 引入工具
let { db } = require('../tools')
// 接口
module.exports = (req, res) => {
    // res.json('success')
    // 操作数据库
    db.collection('product')
        // 查询
        .findMany(null, data => data.sort({ _id: -1 }).limit(10))
        // 监听结果
        .then(
            // 成功
            data => res.json({ list: data }),
            // 失败, 按照接口文档来
            err => res.json({})
        )
}