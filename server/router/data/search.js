// 引入数据库
let { db } = require('../tools');
// 接口
module.exports = (req, res) => {
    // res.json(111)
    // 解构数据
    let { type, value } = req.query;
    // 定义条件
    let condition = {};
    // 设置分类
    if (type > 0) {
        condition.type = +type;
    }
    // 通过正则匹配搜索内容
    condition.title = new RegExp(value, 'i')
    // 操作数据库
    db.collection('product')
        // 查询
        .findMany(condition, data => data.sort({ _id: -1 }).limit(10))
        // 返回数据
        .then(
            // 成功
            data => res.json(data),
            // 失败
            err => res.json([])
        )
}