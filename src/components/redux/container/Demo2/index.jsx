import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommonMenu from '../CommonMenu/index'


class Counter extends Component {
  render() {
    const {value, onDoubleClick} = this.props;
    console.log(value);
    return (
      <div className="demo2Box">
        <CommonMenu history={this.props.history}/>
        <span>{value}</span>
        <button onClick={onDoubleClick}>翻倍</button>
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
    onDoubleClick: () => {
      dispatch({
        type: 'double'
      });
    }
  }
}

const Demo2 = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Demo2;