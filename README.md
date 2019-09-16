# ReactStudy

安装node_modules：npm install

打包项目：npm start

实时编译项目：npm run server

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

React常用知识点总结：

1.react setState后render没有更新:
    解决方案：React.Component 把PureComponent 改成Component。
    总结：PureComponent与Component唯一的区别：PureComponent是自带了一个简单的shouldComponentUpdate来优化更新机制的。
    它们几乎完全相同，但是PureComponent通过prop和state的浅比较来实现shouldComponentUpdate，某些情况下可以用PureComponent提升性能
    如果state和prop一直变化的话，还是建议使用Component，并且PureComponent最好作为展示组件；
    总结地址：https://zhuanlan.zhihu.com/p/82700116
