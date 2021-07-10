// 配置
module.exports = {
    HTTP_PORT: 3000,
    HTTPS_PORT: 3001,
    // 根路径
    ROOT: process.cwd(),
    // 静态化
    STATICS: {
        '/static/': './static/',
        '/favicon.ico': './static/favicon.ico'
    },
    // 数据库地址
    MONGO_URL: 'mongodb://localhost:27017',
    // 数据库名称
    MONGO_NAME: 'ickt_31_vue',
    // 错误信息
    MESSAGE: {
        find: [
            { errno: 0 }, // 曾公
            { errno: 1, msg: '数据库错误' }, 
            { errno: 2, msg: '数据库错误' }, 
            { errno: 3, msg: '没有找到数据' }, 
        ],
        update: [
            { errno: 0 }, // 曾公
            { errno: 4, msg: '数据库错误' }, 
            { errno: 5, msg: '数据库错误' }, 
            { errno: 6, msg: '没有更新数据' }, 
        ],
        insert: [
            { errno: 0 }, // 曾公
            { errno: 7, msg: '数据库错误' }, 
            { errno: 8, msg: '数据库错误' }, 
            { errno: 9, msg: '没有创建数据' }, 
        ],
        remove: [
            { errno: 0 }, // 曾公
            { errno: 10, msg: '数据库错误' }, 
            { errno: 11, msg: '数据库错误' }, 
            { errno: 12, msg: '没有删除数据' }, 
        ],
        login: [
            { errno: 13, msg: '用户名或者密码错误' },
            { errno: 14, msg: '没有登录，请登录！' },
        ],
        upload: [
            // 上传文件解析错误
            { errno: 15, msg: '上传文件错误' },
            // 上传文件存储错误
            { errno: 16, msg: '上传文件错误' },

        ]
    },
    // 上传文件缓存目录
    UPLOAD_CACHE_DIR: '/cache/upload',
    // 上传文件存储目录
    UPLOAD_SAVE_DIR: '/static/upload',
    // 后台商品列表，每页显示的数据
    ADMIN_SHOW_PRODUCT_NUM: 10
}