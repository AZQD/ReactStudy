import React from 'react'
import withHeader from './HOC'

@withHeader({
  test: 666,
  hello: 'world'
})
export default class UseHoc extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getDate();
  }

  componentDidUpdate () {
    console.log('this.props:', this.props);
  }

  clickFun(){
    console.log('clickFun');
  }

  render () {
    return <div>使用高阶组件</div>
  }
}

/*
高阶组件总结：
高阶组件不是组件，是一个把某个组件转换成另一个组件的函数
高阶组件的主要作用是代码复用
高阶组件是装饰器模式在React中的实现

高阶组件的两种方式: 属性代理、反向继承
基于属性代理：高阶组件通过被包裹的React组件来操作props（extends Component）
基于反向继承：拦截生命周期、控制state、渲染过程（extends Wrapcomponent）

高阶组件应用场景：
1.上拉刷新、下拉刷新、全局loading；
2.权限控制；（登录状态管理）
3.组件渲染性能追踪；(每个组件的加载时间)


react中组件根据自身状态可分为无状态组件或叫函数组件，另一种叫做有状态组件或者叫类组件。
无状态组件接受一个props参数，主要用来渲染模板，内部没有复杂d的业务逻辑，
与之相反，有状态组件是用class关键字创建，内部主要的东西就是繁杂的业务逻辑。

* 参考链接：
* https://www.cnblogs.com/zhuanzhuanfe/p/9778823.html
* https://blog.csdn.net/weixin_34150830/article/details/88019752
* https://zhuanlan.zhihu.com/p/61711492?utm_source=wechat_session
* */
