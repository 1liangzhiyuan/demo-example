// 引入数据库
let { db, MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json(111)
    // 查询数据库
    db.collection('product')
        // 查询
        .findOne({ _id: req.query.id })
        // 监听结果
        .then(
            // 成功
            data => res.json({ errno: 0, data }),
            // 失败
            ({ errno }) => res.json(MESSAGE.find[errno])
        )
}