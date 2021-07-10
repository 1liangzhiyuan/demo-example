// 引入工具
let { db, MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json('success')
    // console.log(req.body);
    // 切换集合
    db.collection('product')
        // 插入数据
        .insertOne(req.body)
        // 监听结果
        .then(
            // 成功
            data => res.json(MESSAGE.insert[0]),
            // 失败
            err => res.json(MESSAGE.insert(err.errno))
        )
}