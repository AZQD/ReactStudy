import React from 'react'


export default class SetState extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      val: 0
    }
  }

  componentDidMount () {
    this.setState({
      val: this.state.val + 1
    });
    this.setState({
      val: this.state.val + 2
    });
    this.setState({
      val: this.state.val + 3
    });
    setTimeout( () => {
      this.setState({
        val: this.state.val + 1
      });
      this.setState({
        val: this.state.val + 2
      });
      this.setState({
        val: this.state.val + 3
      });
    }, 0);

    let btn = document.getElementById("btn");
    btn.addEventListener('click', ()=>{
      this.setState({
        val: this.state.val + 1
      });
      this.setState({
        val: this.state.val + 2
      });
      this.setState({
        val: this.state.val + 3
      });
    }, false);

  }

  add = () => {
    this.setState({
      val: this.state.val + 1
    });
    this.setState({
      val: this.state.val + 2
    });
    this.setState({
      val: this.state.val + 3
    });
  };

  componentDidUpdate () {

  }

  render () {
    let {val} = this.state;
    console.log('render', val);
    return (
      <div>
        <h3>SetState同步异步</h3>
        <p>value的值为：{this.state.val}</p>

        <button onClick={this.add}>使用jsx的onclick方式增加</button>
        <br/>
        <button id="btn">使用原生的addEventListener方式增加</button>
      </div>
    )
  }
}

/*

setState的同步异步取决于不同的调用场景，底层根据变量 isBatchingUpdates 来判断是同步更新还是放到队列中异步更新。

React使用了事务的机制，在每个生命周期和合成事件中，事务的前置钩子调用batchedUpdates方法修改isBatchingUpdates变量为true，在后置钩子中将变量置为false。 -- 放到队列中异步更新(合并setState)。
原生绑定addEventListener、setTimeout、ajax等没有进入到React的事务当中，isBatchingUpdates始终为false，-- 同步更新；

参考：https://www.jianshu.com/p/aa403ce27af8
 */