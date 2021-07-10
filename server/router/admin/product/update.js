// 引入数据库
let { db, MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json(1111)
    // console.log(req.body);
    let _id = req.body._id;
    // 不能更新_id字段
    delete req.body._id;
    // 操作数据库
    db.collection('product')
        // 更新操作
        .updateOne({ _id }, { $set: req.body })
        // 监听结果
        .then(
            // 成功
            data => res.json(MESSAGE.update[0]),
            // 失败
            err => res.json(MESSAGE.update[err.errno])
        )
}