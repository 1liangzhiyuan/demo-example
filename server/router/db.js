// 引入mongodb模块
let { MongoClient, ObjectId } = require('mongodb');
// 定义数据库类
function DataBase(url, databaseName, collectionName) {
    // 存储信息
    this.url = url;
    this.databaseName = databaseName;
    // 集合名称
    this.collectionName = collectionName
}
// 定义原型方法
Object.assign(DataBase.prototype, {
    // 切换集合名称的方法
    collection(name) {
        this.collectionName = name;
        // 链式调用了
        return this;
    },
    // 定义connect方法，可以连接数据库，并返回数据库对象
    connect() {
        return new Promise((resolve, reject) => {
            // 连接数据库
            MongoClient.connect(this.url, { useNewUrlParser: true }, (err, client) => {
                // 有错误表示连接失败
                if (err) {
                    reject(err);
                } else {
                    // 返回数据库对象
                    resolve({ db: client.db(this.databaseName), client })
                }
            })
        })
    },
    // 插入一条数据，返回promise对象
    insertOne(data) {
        return new Promise((resolve, reject) => {
            // 直接连接数据库
            this.connect()
                // 成功
                .then(({db, client}) => {
                    db.collection(this.collectionName).insertOne(data, function(err, data) {
                        // console.log(err, data);
                        // 如果有错误
                        if (err) {
                            reject({ errno: 2, err })
                        } else if (data.result.n > 0) {
                            // console.log(11111);
                            // 写入数据成功
                            resolve(data)
                        } else {
                            reject({ errno: 3, err: '没有写入数据' })
                        }
                        // 关闭数据库
                        client.close()
                    })
                })
                // 连接数据库失败
                .catch(err => reject({ errno: 1, err }))
        })
    },
    // 插入多条数据
    insertMany(arr) {
        // 返回promise
        return new Promise((resolve, reject) => {
            // 1 连接数据库， 2获取集合，3 通过集合插入数据
            this.connect()
                // 监听成功
                .then(({ db, client }) => {
                    // 获取集合
                    db.collection(this.collectionName)
                        // 插入数据
                        .insertMany(arr, (err, data) => {
                            // console.log(err, result);
                            // 有错误
                            if (err) {
                                reject({ errno: 2, err })
                            } else if (data.result.n > 0) {
                                // 成功了
                                resolve()
                            } else {
                                // 没有插入数据
                                reject({ errno: 3, err: '没有插入数据' })
                            }
                        })
                        // 关闭数据库
                        client.close()
                })
                // 监听失败
                .catch(err => reject({ errno: 1, err }))
        })
    },
    // 删除一条数据
    deleteOne(obj) {
        return new Promise((resolve, reject) => {
            // 1 连接数据库， 2 连接集合    3 删除
            this.connect()
                // 成功
                .then(({ db, client }) => {
                    // 如果是根据_id进行删除的，要通过ObjectId方法包装
                    if (obj._id) {
                        obj._id = ObjectId(obj._id);
                    }
                    // 通过数据库，获取集合
                    db.collection(this.collectionName)
                        // 删除
                        .deleteOne(obj, (err, data) => {
                            // console.log(err, data);
                            // 有错误
                            if (err) {
                                reject({ errno: 2, err })
                            } else if (data.result.n > 0) {
                                // 成功
                                resolve();
                            } else {
                                // 没有删除任何一条数据
                                reject({ errno: 3, err: '没有删除数据' })
                            }
                        })
                    // 关闭数据库
                    client.close();
                })
                // 失败
                .catch(err => reject({ errno: 1, err }))
        })
    },
    // 删除多条
    deleteMany(arr) {
        // 遍历数组，对每一个成员，执行deleteOne
        return Promise.all(arr.map(item => this.deleteOne(item)))
    },
    // 需改数据
    updateOne(oldObj, newObj) {
        return new Promise((resolve, reject) => {
            // 连接数据库
            this.connect()
                // 成功
                .then(({ db, client }) => {
                    // 如果传递了_id要包装
                    if (oldObj._id) {
                        oldObj._id = ObjectId(oldObj._id)
                    }
                    // 获取集合，更新数据
                    db.collection(this.collectionName)
                        // 更新数据
                        .updateOne(oldObj, newObj, (err, data) => {
                            // console.log(err, data);
                            // 判断错误
                            if (err) {
                                reject({ errno: 2, err })
                            } else if (data.result.n > 0) {
                                // 成功
                                resolve();
                            } else {
                                reject({ errno: 3, err: '没有更新数据' })
                            }
                        })
                    // 关闭数据库
                    client.close();
                })
                // 失败
                .catch(err => reject({ errno: 1, err }))
        })
    },
    // 更新多条
    updateMany(arr) {
        // 对每一个成员进行单独更新，并监听结果
        // 数组中的每一个成员，分别传递给函数，作为参数，用...
        return Promise.all(arr.map(item => this.updateOne(...item)))
    },
    // 查询数据
    findOne(obj) {
        return new Promise((resolve, reject) => {
            // 如果字段是_id，要用ObjectId方法包装
            if (obj._id) {
                obj._id = ObjectId(obj._id);
            }
            // 连接数据库
            this.connect()
                // 成功
                .then(({ db, client }) => {
                    // 查询数据
                    db.collection(this.collectionName)
                        // 查询
                        .findOne(obj, (err, data) => {
                            // console.log(err, data);
                            // 有错误
                            if (err) {
                                reject({ errno: 2, err })
                            } else if (data) {
                                // 找到数据了
                                resolve(data);
                            } else {
                                // 没有数据
                                reject({ errno: 3, err: '没有找到数据' })
                            }
                        })
                    // 关闭数据库
                    client.close();
                })
                // 失败
                .catch(err => reject({ errno: 1, err }))
        })
    },
    // 查询多条数据
    // function (data) { return data }
    findMany(obj, fn = data => data) {
        return new Promise((resolve, reject) => {
            // 连接数据库
            this.connect()
                // 成功
                .then(({ db, client }) => {
                    // 获取集合
                    // 查询
                    fn(db.collection(this.collectionName).find(obj))
                        // .sort({ n: 1 })
                        // .sort({ n: -1 })
                        // // 跳过
                        // .skip(1)
                        // // 截取
                        // .limit(1)
                        // 转成数组
                        .toArray((err, data) => {
                            // console.log(err, data);
                            // 判断
                            if (err) {
                                reject({ errno: 2, err })
                            } else if (data.length) {
                                // 成功
                                resolve(data)
                            } else {
                                // 失败
                                reject({ errno: 3, err: '没有找到数据' })
                            }
                        })
                    // 关闭数据库
                    client.close();
                })
                // 失败
                .catch(err => reject({ errno: 1, err }))
        })
    }
})

// 暴露接口
module.exports = DataBase;