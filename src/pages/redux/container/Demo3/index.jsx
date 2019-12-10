import React, {Component} from 'react';
import ajax from 'ajax-promise-simple';
import CommonMenu from '../CommonMenu';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionFN from '../../action'
import handleForm from "../../reducers/handleForm";

class CateList extends Component {

  componentDidMount() {
    console.log('Demo3-props', this.props);
  }

  // 输入框
  handleInput = (e, type) => {
    let value = e.target.value;
    if (type === 'phone') { // 校验电话格式
      value = value.substring(0, 11);
    }
    this.props.inputOnChange({type, value});
  };

  render() {
    // console.log('Demo3', this.props);
    const {activeIndex, cateList} = this.props.handleList;
    const {name, phone} = this.props.handleForm;
    // console.log('activeIndex=' + activeIndex);
    return (
      <div>
        <CommonMenu history={this.props.history} />
        <button  onClick={() => this.props.getCateList()}>获取列表</button>
        <div className="demo3Box">
          {
            cateList.map((item, index) =>
              <li style={{color: index === activeIndex && 'red'}} key={index} onClick={() => this.props.toggleCateItem(index)}>{item.cateId}：{item.name}</li>
            )
          }
        </div>
        <div className="formBox">
          姓名：<input value={name} onChange={(e) => this.handleInput(e, 'name')} type="text"/><br/>
          电话：<input value={phone} onChange={(e) => this.handleInput(e, 'phone')} type="number"/><br/>
          <button>提交</button>
        </div>
      </div>
    )
  };
}

// 接收第二个参数ownProps，ownProps代表组件本身的props
const mapStateToProps = (state, ownProps) => {
  // console.log(1234, state, ownProps);
  return {
    handleList: state.handleList,
    handleForm: state.handleForm,
  }
};

// mapDispatchToProps的第一种写法：
/*const mapDispatchToProps = (dispatch) => ({
  getCateList: () => {
    dispatch(actionFN.getCateList());
  },
  toggleCateItem: (index) => {
    dispatch(actionFN.toggleCateItem(index));
  },
  inputOnChange: (params) => {
    dispatch(actionFN.inputOnChange(params));
  }
});*/

// mapDispatchToProps的第二种写法：
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCateList: actionFN.getCateList,
    toggleCateItem: actionFN.toggleCateItem,
    inputOnChange: actionFN.inputOnChange
  }, dispatch);
};


const Demo3 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo3;