// 引入插件
let OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
// 引入配置
let config = require('./webpack.dev');
// console.log(config);
// 添加配置
// 压缩js
config.mode = 'production';
// 压缩css
config.plugins.push(new OptimizeCssAssets())

// 发布的配置
module.exports = config;
