import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommonMenu from '../CommonMenu/index'

// React component
class Counter extends Component {
  render() {
    console.log(this.props);
    const {value, onAddClick, onReduceClick} = this.props;
    return (
      <div>
        <CommonMenu history={this.props.history}/>
        <div>{value}</div>
        <button onClick={onAddClick}>add</button>
        <button onClick={onReduceClick}>reduce</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onReduceClick: PropTypes.func.isRequired
};

// Action
const increaseAction = {type: 'add'};


// Map Redux state to component props
function mapStateToProps(state) {
  const counter = state.counter;
  console.log(counter.count);
  return {
    value: counter.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onAddClick: () => dispatch({
      type: 'add'
    }),
    onReduceClick: () => dispatch({
      type: 'reduce'
    }),
  }
}

// Connected Component
const Demo1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default Demo1;

/**
 * 3、组件内访问和改变状态树——mapStateToProps & mapDispatchToProps

 我们知道，组件间的传值使用的是props，mapStateToProps和mapDispatchToProps这两个方法，顾名思义，就是把状态树和改变状态树的方法作为组件的props，这样就可以达到访问、改变状态树的目的；

 4、状态树和组件之间友谊的小船——connect

 connect是一个高阶函数，用于连接状态树和组件
 */
