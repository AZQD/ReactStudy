import React, {Component} from 'react';
import ajax from 'ajax-promise-simple';
import CommonMenu from '../CommonMenu';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionFN from '../../action'

class CateList extends Component {

  componentDidMount() {
    console.log('Demo3-props', this.props);
  }

  getCateList() {
    this.props.action.getCateList();
  }

  render() {
    console.log('Demo3', this.props);
    return (
      <div>
        <CommonMenu history={this.props.history} />
        <button  onClick={() => this.props.getCateList()}>获取列表</button>
        <div className="demo3Box">

        </div>
      </div>
    )
  };
}

/*function mapStateToProps(state) {
  const { cateList } = state;
  return {
    cateList: cateList.cateList
  }
}*/

const mapStateToProps = (state) => {
  const { cateList } = state;
  return {
    cateList: cateList.cateList
  }
};

/*function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actionFN, dispatch)
  }
}*/

const mapDispatchToProps = (dispatch) => ({
  getCateList: () => {
    dispatch(actionFN.getCateList());
  }
});


const Demo3 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo3;