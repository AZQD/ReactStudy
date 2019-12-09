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

  render() {
    // console.log('Demo3', this.props);
    const {activeIndex, cateList} = this.props;
    console.log('activeIndex=' + activeIndex);
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
  const { handleList } = state;
  return {
    cateList: handleList.cateList,
    activeIndex: handleList.activeIndex,
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
  },
  toggleCateItem: (index) => {
    dispatch(actionFN.toggleCateItem(index));
  }
});


const Demo3 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo3;