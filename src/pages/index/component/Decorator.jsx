import React from 'react'


// 1.类的装饰
/*function decorator1(target) { // 装饰器函数的第一个参数，就是所要装饰的目标类
  console.log(target);
  target.param1 = 1; // 为类添加一个静态属性
  target.prototype.param2 = 2; // 添加实例属性
}

@decorator1
export default class Component1 extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount(){
    console.log('组件的实例属性：', this.param1);
    console.log('组件的实例属性：', this.param2);
  }
  render() {
    return <div>类的装饰和方法的装饰</div>
  }
}
console.log('组件的静态属性：', Component1.param1);
console.log('组件的静态属性：', Component1.param2);*/


// 2.方法的装饰

function decorator2(target, name, descriptor) {
  console.log(target, name, descriptor);
}
export default class Component2 extends React.Component{
  constructor(porps){
    super(porps);
  }
  @decorator2
  addFun(a, b){
    return a + b;
  }
  render(){
    return <div>类的装饰和方法的装饰</div>
  }
}