// 引入数据库
let DataBase = require('./db')
// 引入配置
let conf = require('../conf')

// 实例化
let db = new DataBase(conf.MONGO_URL, conf.MONGO_NAME)

// console.log(db);

// 暴露接口
module.exports = { db, ...conf }