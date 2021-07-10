// 引入path
let path = require('path');

// 指令指令的位置
let root = process.cwd();
// 判断环境
if (process.env.NODE_ENV === 'production') {
    // 执行build指令发布项目
    module.exports = {
        // 静态资源发布位置
        outputDir: path.join(root, '../server/static/home/'),
        // 模板
        indexPath: path.join(root, '../server/views/home.html'),
        // 模板文件引入静态资源相对位置
        publicPath: '/static/home/'
    }
} else {
    // 跨域请求代理的配置对象
    let proxyObject = {
        // 目标地址
        target: 'http://localhost:3000'
    }
    // 执行serve指令运行项目
    module.exports = {
        // 服务器配置
        devServer: {
            // 跨域请求代理
            proxy: {
                // '/data/home': {
                //     // 目标地址
                //     target: 'http://localhost:3000'
                // },
                // // 列表页
                // '/data/list': {
                //     // 目标地址
                //     target: 'http://localhost:3000'
                // }
                // 直接复用这个对象
                '/data/home': proxyObject,
                '/data/list': proxyObject,
                '/data/search': proxyObject,
                '/data/order': proxyObject,
                '/data/detail': proxyObject,
            }
        }
    }
}