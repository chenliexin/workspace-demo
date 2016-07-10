var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLESS = new ExtractTextPlugin('../css/[name].css');

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index: './src/index'
    },
    //入口文件输出配置
    output: {
        path: 'static/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loader: 'jsx?harmony'
        }, {
            test: /less1\.less$/,
            loader: extractLESS.extract(['css', 'less']),
        }, {
            test: /less2\.less$/,
            loader: 'style!css!less?sourceMap'
        }]
    },
    plugins: [
        extractLESS
    ],
    devtool: "source-map"
};