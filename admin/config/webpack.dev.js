// 引入path
let path = require('path');
// 引入插件
let { VueLoaderPlugin } = require('vue-loader');
let HtmlWebpackPlugn = require('html-webpack-plugin')
let MiniCssExtract = require('mini-css-extract-plugin');
// 根路径
let root = process.cwd();
// 配置
module.exports = {
    // 模式
    mode: 'development',
    // 解决问题
    resolve: {
        // 拓展名
        extensions: ['.vue', '.js'],
        // 别名
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': path.join(root, './src'),
            '@c': path.join(root, './src/components'),
            '@v': path.join(root, './src/views'),
            '@t': path.join(root, './src/tools'),
        }
    },
    // 入口
    entry: './src/main.js',
    // 发布
    output: {
        // 发布相对位置
        path: path.join(root, '../server'),
        // 文件名
        filename: './static/admin/[name].js',
        // 模板引入静态文件的相对位置
        publicPath: '/'
    },
    // 模块
    module: {
        // 加载机
        rules: [
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtract.loader,
                    'css-loader'
                ]
            },
            // scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 字体图标
            {
                test: /\.(woff|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    // 插件
    plugins: [
        // vue
        new VueLoaderPlugin(),
        // 模板
        new HtmlWebpackPlugn({
            // 模板
            template: './public/index.html',
            // 发布
            filename: './views/admin.html',
            // 添加指纹
            hash: true
        }),
        // css发布位置
        new MiniCssExtract({
            filename: './static/admin/style.css'
        })
    ],
    // 拆分库文件
    optimization: {
        // 拆分文件
        splitChunks: {
            // 缓存
            cacheGroups: {
                // 文件名
                lib: {
                    name: 'lib',
                    chunks: 'initial',
                    test: /node_modules/
                }
            }
        }
    }
}