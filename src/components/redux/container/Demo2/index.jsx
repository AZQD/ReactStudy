import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommonMenu from '../CommonMenu/index'


class Counter extends Component{
  render(){
    const {value, onIncreaseClick} = this.props;
    return (
      <div className="demo2Box">
        <CommonMenu history={this.props.history}/>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>点击</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: ()=>{
      dispatch({
        type: 'reduce'
      });
    }
  }
}

const Demo2 = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Demo2;