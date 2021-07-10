// 引入工具
let { db, ADMIN_SHOW_PRODUCT_NUM, MESSAGE } = require('../../tools');
// 接口
module.exports = (req, res) => {
    // res.json(1111)
    // console.log(req.query);
    // 计算机计数从0计数，因此要修改page
    let page = req.query.page || 1;
    // 从0计数要减一
    page = page < 1 ? 0 : page - 1;

    // 查询数据
    db.collection('product')
        .findMany(null, data => {
            // console.log(data);
            // 排序
            data
                .sort({ _id: -1 })
                // 翻页
                .skip(ADMIN_SHOW_PRODUCT_NUM * page)
                // 截取
                .limit(ADMIN_SHOW_PRODUCT_NUM)
            return data;
        })
        // 监听结果
        .then(
            // 成功
            data => res.json({ errno: 0, data }),
            // 失败
            err => res.json(MESSAGE.find[err.errno])
        )
}