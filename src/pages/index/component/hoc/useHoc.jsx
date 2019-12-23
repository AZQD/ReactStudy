import React from 'react'
import withHeader from './HOC'

@withHeader
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

  render () {
    return <div>使用高阶组件</div>
  }
}

/*
* 高阶组件总结：
*高阶组件不是组件，是一个把某个组件转换成另一个组件的函数
*高阶组件的主要作用是代码复用
*高阶组件是装饰器模式在React中的实现
* 参考链接：
* https://www.cnblogs.com/zhuanzhuanfe/p/9778823.html
* https://blog.csdn.net/weixin_34150830/article/details/88019752
* */
