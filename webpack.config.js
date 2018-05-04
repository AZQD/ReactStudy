const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//html模板
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//压缩js
const CleanWebpackPlugin = require("clean-webpack-plugin");//清除相关文件

module.exports = {
  entry:  __dirname + "/src/index.jsx",//已多次提及的唯一入口文件
  resolve:{
    extensions:['.js',".css",'.jsx', '.less']//自动补全文件后缀
  },
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "js/bundle-[hash].js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },//注意less的配置
          'less-loader'
        ]
      }
    ]
  },
  plugins: [

    // 这里是之前配置的其它各种插件
    new CleanWebpackPlugin(
      [
        'build/js/*.js*',    // removes all files in 'build' folder
      ],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }),

    new webpack.BannerPlugin('一分耕耘，一分收获！'),//自带插件

    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
      title:'index',
      filename:'index.html',
      chunks:"js/bundle",//如果引入多个js,参考github上PICOOC文件写法；
    }),

    new webpack.HotModuleReplacementPlugin(),//热加载插件

    new UglifyJSPlugin(),//压缩插件

  ],
}