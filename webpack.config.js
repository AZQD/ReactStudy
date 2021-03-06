const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");// html模板
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");// 压缩js
const CleanWebpackPlugin = require("clean-webpack-plugin");// 清除相关文件

const autoprefixer = require('autoprefixer'); // 自动添加浏览器厂商前缀

module.exports = {
  entry: {
    index: `${__dirname}/src/pages/index/Index.jsx`, // 已多次提及的唯一入口文件
    redux: `${__dirname}/src/pages/redux/Index.jsx`, // 已多次提及的唯一入口文件,
    test: `${__dirname}/src/pages/test/Index.jsx`, // 已多次提及的唯一入口文件
  },
  resolve: {
    extensions: [".js", ".css", ".jsx", ".less"], // 自动补全文件后缀
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@util': path.join(__dirname, 'src/util'),
      '@static': path.join(__dirname, 'static'),
      '@mockjs': path.join(__dirname, 'src/mockjs'),
    }
  },
  output: {
    path: `${__dirname}/build`, // 打包后的文件存放的地方
    // publicPath:'/assest',
    filename: "js/[name].[hash].js", // 打包后输出文件的文件名
  },
  devServer: {
    port: 8081,
    // contentBase: "./",//本地服务器所加载的页面所在的目录
    contentBase: `${__dirname}/`,
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true, // 开启HMR
    proxy: {
      "/sug": {
        target: "https://suggest.taobao.com/",
        changeOrigin: true,
        secure: false,
      },
      "/portal/interface": {
        target: "https://wenku.baidu.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }, // 注意less的配置
          "less-loader",
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
              ]
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }, // 注意sass的配置
          "sass-loader",
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
              ]
            }
          }
        ]
      },
      {
        // loader 后面 limit 字段代表图片打包限制，这个限制是指当图片大小小于限制时会自动转成 base64 码引用。
        // name 字段指定了在打包根目录（output.path）下生成名为 images 的文件夹，并在原图片名前加上8位 hash 值。
        // test: /\.(png|jpg|gif)$/,
        // loader: 'url-loader?limit=8192'
        // loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]",
        test: /\.(jpg|png|gif|svg|woff2?|eot|ttf)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash:6]',
            limit: 8192,
            // publicPath: '/static',
            // outputPath: 'static',
          },
        }],
      },
      {
        // test: /\.html$/,
        // loader: 'html-loader'
      },
    ],
  },
  plugins: [

    // 这里是之前配置的其它各种插件
    new CleanWebpackPlugin(
      [
        // 'build/js/*.js*',    // removes all files in 'build' folder
        "build", // removes all files in 'build' folder
      ],
      {
        root: __dirname,
        verbose: true,
        dry: false,
      },
    ),

    new webpack.BannerPlugin("一分耕耘，一分收获！"), // 自带插件

    new HtmlWebpackPlugin({
      template: `${__dirname}/src/test.tmpl.html`, // new 一个这个插件的实例，并传入相关的参数
      title: "test",
      filename: "test.html",
      chunks: ["test"], // 如果引入多个js,参考github上PICOOC文件写法；
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.tmpl.html`, // new 一个这个插件的实例，并传入相关的参数
      title: "index",
      filename: "index.html",
      chunks: ["index"], // 如果引入多个js,参考github上PICOOC文件写法；
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/redux.tmpl.html`, // new 一个这个插件的实例，并传入相关的参数
      title: "redux",
      filename: "redux.html",
      chunks: ["redux"], // 如果引入多个js,参考github上PICOOC文件写法；
      hash: true,
      favicon: "./favicon.ico",
    }),

    new webpack.HotModuleReplacementPlugin(), // 热加载插件


    new MiniCssExtractPlugin({ // 抽离css文件插件
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),

    // new UglifyJSPlugin(),//压缩插件
  ],
};