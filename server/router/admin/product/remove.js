// 引入工具
let { db, MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json(111)
    // 操作数据库
    db.collection('product')
        // 删除
        .deleteOne({ _id: req.body.id })
        // 监听结果
        .then(
            // 成功
            data => res.json(MESSAGE.remove[0]),
            // 失败
            err => res.json(MESSAGE.remove[err.errno])
        )
}