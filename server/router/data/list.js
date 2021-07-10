// 引入工具
let { db } = require('../tools');
// 接口
module.exports = (req, res) => {
    // res.json('success')
    // console.log(req.query.id, typeof req.query.id);
    // 定义查询条件
    let condition = {};
    // 设置type
    if (req.query.id > 0) {
        condition.type = +req.query.id;
    }
    // 操作数据库
    db.collection('product')
        // 查询
        .findMany(condition, data => data.sort({ _id: -1 }).limit(10))
        // 监听数据返回
        .then(
            // 成功
            data => res.json(data),
            // 失败
            err => res.json([])
        )
    // console.log(condition);
}