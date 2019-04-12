import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import CommonMenu from '../CommonMenu/index'
import * as actionFN from "../../action";


class Counter extends Component {

  onDoubleClick(){
    this.props.action.onDoubleClick();
  }

  render() {
    return (
      <div className="demo2Box">
        <CommonMenu history={this.props.history}/>
        <span>{this.props.value}</span>
        <button onClick={()=>{this.onDoubleClick()}}>翻倍</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const counter = state.counter;
  return {
    value: counter.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actionFN, dispatch)
  }
}

const Demo2 = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Demo2;