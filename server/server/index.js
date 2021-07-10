// 引入path
let path = require('path');
// 引入fs
let fs = require('fs');
// 引入http和https
let http = require('http');
let https = require('https');
// 引入端口号
let { HTTP_PORT, HTTPS_PORT } = require('../conf');

// 根路径
let root = process.cwd();

// http和https协议
// app.listen(3000)
// 读取文件
let key = fs.readFileSync(path.join(root, './server/ssl/private.pem'));
let cert = fs.readFileSync(path.join(root, './server/ssl/file.crt'));
// console.log(process.argv);
// 定义端口号
const httpPort = process.argv[2] || HTTP_PORT;
const httpsPort = process.argv[3] || (process.argv[2] ? +process.argv[2] + 1 : HTTPS_PORT);

// 暴露接口
module.exports = function(app) {
    // 创建服务器
    http
        .createServer(app)
        .listen(httpPort, () => console.log('http port listen at ' + httpPort));
    // https服务
    https
        .createServer({ key, cert }, app)
        .listen(httpsPort, () => console.log('https port listen at ' + httpsPort));
}