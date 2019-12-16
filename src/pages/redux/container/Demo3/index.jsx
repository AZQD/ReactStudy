import React, {Component} from 'react';
import CommonMenu from '../CommonMenu';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actionFN from '../../action';
import './index.less';

class CateList extends Component {

  componentDidMount() {
    // console.log('Demo3-props', this.props);
  }

  // 输入框
  handleInput = (e, type) => {
    let value = e.target.value;
    if (type === 'phone') { // 校验电话格式
      value = value.substring(0, 11);
    }
    // value = value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");（禁止输入表情正则表达式）
    this.props.inputOnChange({type, value});
  };

  render() {
    // console.log('Demo3', this.props);
    const {activeIndex, cateList} = this.props.handleList;
    const {name, phone, submitFlag} = this.props.handleForm;
    // console.log('activeIndex=' + activeIndex);
    return (
      <div>
        <CommonMenu history={this.props.history} />
        <div className="demo3Box">

          <div className="partItem">
            <button className="btn" onClick={() => this.props.getCateList()}>获取列表</button>
            {
              cateList.map((item, index) =>
                <li style={{color: index === activeIndex && 'red'}} key={index} onClick={() => this.props.toggleCateItem(index)}>{item.cateId}：{item.name}</li>
              )
            }
          </div>

          <div className="partItem">
            <hr/>
            姓名：<input className="ipt" value={name} onChange={(e) => this.handleInput(e, 'name')} type="text"/><br/>
            电话：<input className="ipt" value={phone} onChange={(e) => this.handleInput(e, 'phone')} type="number"/><br/>
            <button className="btn" onClick={() => this.props.submitForm({name, phone})}>提交</button>
            {
              submitFlag && <div>提交成功！</div>
            }
          </div>

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
/*const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCateList: actionFN.getCateList,
    toggleCateItem: actionFN.toggleCateItem,
    inputOnChange: actionFN.inputOnChange
  }, dispatch);
};*/

// mapDispatchToProps的第三种写法：
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actionFN, dispatch)
  };
};


const Demo3 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo3;