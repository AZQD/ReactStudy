const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//html模板
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//压缩js
const CleanWebpackPlugin = require("clean-webpack-plugin");//清除相关文件

module.exports = {
  entry: {
    test:__dirname + "/src/components/test/Index.jsx",//已多次提及的唯一入口文件
    index:__dirname + "/src/components/index/Index.jsx",//已多次提及的唯一入口文件
    redux:__dirname + "/src/components/redux/Index.jsx",//已多次提及的唯一入口文件
  },
  resolve:{
    extensions:['.js',".css",'.jsx', '.less']//自动补全文件后缀
  },
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    // publicPath:'/assest',
    filename: "js/[name].[hash].js"//打包后输出文件的文件名
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
      },
      {
        //loader 后面 limit 字段代表图片打包限制，这个限制是指当图片大小小于限制时会自动转成 base64 码引用。
        //name 字段指定了在打包根目录（output.path）下生成名为 images 的文件夹，并在原图片名前加上8位 hash 值。
        test: /\.(png|jpg|gif)$/,
        // loader: 'url-loader?limit=8192'
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
      },
      {
        test:/\.html$/,
        loader:'html-loader'
      }
    ]
  },
  plugins: [

    // 这里是之前配置的其它各种插件
    new CleanWebpackPlugin(
      [
        // 'build/js/*.js*',    // removes all files in 'build' folder
        'build',    // removes all files in 'build' folder
      ],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }),

    new webpack.BannerPlugin('一分耕耘，一分收获！'),//自带插件

    new HtmlWebpackPlugin({
      template: __dirname + "/src/test.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
      title:'test',
      filename:'test.html',
      chunks:['test'],//如果引入多个js,参考github上PICOOC文件写法；
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
      title:'index',
      filename:'index.html',
      chunks:['index'],//如果引入多个js,参考github上PICOOC文件写法；
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/redux.tmpl.html",//new 一个这个插件的实例，并传入相关的参数
      title:'redux',
      filename:'redux.html',
      chunks:['redux'],//如果引入多个js,参考github上PICOOC文件写法；
    }),

    new webpack.HotModuleReplacementPlugin(),//热加载插件

    // new UglifyJSPlugin(),//压缩插件

  ],
}