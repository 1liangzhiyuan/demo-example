// 引入工具
let { db } = require('../tools');
// 接口
module.exports = (req, res) => {
    // 解构数据
    let { id, desc, type } = req.query;
    // res.json(111)
    // 定义查询条件
    let condition = {};
    // 分类
    if (type > 0) {
        condition.type = +type;
    }
    // 如果是优惠排序
    if (id === 'discount') {
        // 操作数据库
        db.collection('product')
            // 查找
            .findMany(condition)
            // 监听结果
            .then(
                // 成功
                data => {
                    // 优惠就是原价减去现价
                    let result = data.sort((a, b) => {
                        // 排序算法
                        return ((a.originPrice - a.price) - (b.originPrice - b.price)) * desc
                    // 最终要截取10条数据。
                    }).slice(0, 10)
                    // 返回数据
                    res.json(result);
                },
                // 失败
                err => res.json([])
            )
        return;
    }
    // 操作数据
    db.collection('product')
        // 根据id变量对应的字段排序，desc表示升序或者降序
        // 排序的字段desc必须是数字
        .findMany(condition, data => data.sort({ [id]: +desc }).limit(10))
        // 返回数据
        .then(
            // 成功
            data => res.json(data),
            // 失败
            err => res.json([])
        )
}