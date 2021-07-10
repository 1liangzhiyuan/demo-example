// 引入上传模块
let Formidable = require('formidable');
// 引入path
let path = require('path');
// 引入fs
let fs = require('fs');
// 引入配置
let { UPLOAD_CACHE_DIR, UPLOAD_SAVE_DIR, ROOT, MESSAGE } = require('../../tools');
// 接口
module.exports = function(req, res) {
    // res.json('success')
    // 接收器
    let form = new Formidable();
    // 定义缓存目录
    form.uploadDir = path.join(ROOT, UPLOAD_CACHE_DIR);
    // console.log(form);
    // 解析请求
    form.parse(req, (err, fields, files) => {
        // console.log(err, files, fields);
        // 如果有错误，提示错误
        if (err) {
            return res.json(MESSAGE.upload[0])
        }
        // 文件名由20位随机数构成
        let filePath = UPLOAD_SAVE_DIR + '/' + 
            String(Math.random()).slice(2, 12) + 
            String(Math.random()).slice(2, 12) + 
            // 添加拓展名
            path.extname(files.file.name)
        // 移动文件
        fs.rename(files.file.path, path.join(ROOT, filePath), err => {
            // 有错误，提示错误
            if (err) {
                return res.json(MESSAGE.upload[1])
            }
            // 上传成功
            res.json({ errno: 0, data: filePath })
        })
    })
}