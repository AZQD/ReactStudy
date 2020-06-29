# ReactStudy

安装依赖：npm install

实时编译：npm run dev

打包项目：npm run build

# React 组件生命周期
在本章节中我们将讨论 React 组件的生命周期。

组件的生命周期可分成三个状态：

Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM
生命周期的方法有：

componentWillMount 在渲染前调用,在客户端也在服务端。

componentDidMount: 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

componentWillReceiveProps(newProps) 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

shouldComponentUpdate(newProps, newState) 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。

componentWillUpdate(nextProps, nextState) 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

componentDidUpdate(prevProps, prevState) 在组件完成更新后立即调用。在初始化时不会被调用。

componentWillUnmount在组件从 DOM 中移除之前立刻被调用。

React新的生命周期：https://www.cnblogs.com/colima/p/9484607.html;

# React常用知识点总结

### 1.react setState后render没有更新:
```
解决方案：React.Component 把PureComponent 改成Component。
总结：PureComponent与Component唯一的区别：PureComponent是自带了一个简单的shouldComponentUpdate来优化更新机制的。
它们几乎完全相同，但是PureComponent通过prop和state的浅比较来实现shouldComponentUpdate，某些情况下可以用PureComponent提升性能
如果state和prop一直变化的话，还是建议使用Component，并且PureComponent最好作为展示组件；
```
参考链接：[https://zhuanlan.zhihu.com/p/82700116](https://zhuanlan.zhihu.com/p/82700116)

### 2.React 在jsx文件中使用箭头函数报错:
```
(1).安装ES7的转码规则 cnpm install --save-dev babel-preset-stage-2
(2).在.babelrc里更改配置："presets": ["react", "es2015", "env","stage-1"]
‘react’版块用于编译jsx文件，'es2015'用于预先加载es6语法的模块；
```
参考链接：[https://www.jianshu.com/p/532a4a5201e9](https://www.jianshu.com/p/532a4a5201e9)

### 3.ES6里的修饰器Decorator支持配置：
```
(1).cnpm i babel-plugin-transform-decorators-legacy --save-dev
(2).在.babelrc里添加配置：plugins: ["transform-decorators-legacy"]
```

### 4.使用 html-webpack-plugin 插件，title配置没有生效：

```
(1).在模板html中已配置：<title><%= htmlWebpackPlugin.options.title %></title>
(2).webpack.config.js的plugin中已经配置如下：
    new HtmlWebpackPlugin({
      title: 'redux',
      template: __dirname + "/src/redux.tmpl.html",
      filename: 'redux.html',
      chunks: ['redux'],
    });
    
解决方案：webpack.config.js的配置文件里面加了 html-loader，加了之后会正常解析html文件作为模版，
就会直接把 <%= htmlWebpackPlugin.options.title %>解析成字符串。如果有html-loader ,去掉就可以了。

该插件更多参数配置参考：https://github.com/jantimon/html-webpack-plugin
```

### 5.对文件执行ESlint，有如下报错："Parsing error: Unexpected token = ***"，或者报错：Parsing error: The keyword 'import' is reserved：

```
原因：开发环境与ESLint当前的解析功能不兼容；
解决方案：使用babel-eslint解析；
(1).安装babel-eslint： cnpm install babel-eslint --save-dev
(2).在.eslintrc中添加: "parser": "babel-eslint"
```

### 6.关于ESlint相关文档：

官网：[https://cn.eslint.org/](https://cn.eslint.org/)

ESlint规则Rules：[https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)

webpack引入eslint详解：[https://www.jianshu.com/p/33597b663481](https://www.jianshu.com/p/33597b663481)

lint-staged：取得所有被提交的文件依次执行写好的任务（ESLint 和 Prettier）：
[https://www.jianshu.com/p/cdd749c624d9](https://www.jianshu.com/p/cdd749c624d9)

ESlint配置参考文档：https://segmentfault.com/a/1190000016626739#articleHeader5

Prettier配置参考：https://segmentfault.com/a/1190000015862803

### 7.React编译报错：Invalid hook call. Hooks can only be called inside of the body of a function component.:
```
(1)原因：react react-dom 是 16.13.0 版本 升级 16.13.0 问题解决
(2)解决：cnpm install --save react@16.13.0 react-dom@16.13.0
```
参考链接：[https://blog.csdn.net/guokaigdg/article/details/104906217](https://blog.csdn.net/guokaigdg/article/details/104906217)


### 8.React编译报错：Super expression must either be null or a function, not undefined:
```
(1)原因：关键字书写错误
(2)解决：检查书写，如：class Index extends React.PureComponent
```

### 9.React路由动态加载方案：
```
1. npm i react-loadable --save-dev
2. 封装工具 /util/loadable
3. 引入和使用：
import loadable from '../../util/loadable'; // 路由动态加载
const ReactRender = loadable(() => import('./component/ReactRender'));
4. npm run build打包可以看到多个打包文件；
```
test