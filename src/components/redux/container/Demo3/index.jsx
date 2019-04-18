import React, {Component} from 'react';
import ajax from 'ajax-promise-simple';
import CommonMenu from '../CommonMenu';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionFN from '../../action'

class CateList extends Component{
  
  componentDidMount(){
    console.log('Demo3-props', this.props);
    // ajax.getJSON('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8C%97%E4%BA%AC')
    ajax.getJSON('https://ewxtongzhen.58.com/shop/posts/category/b/list')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        {/*<CommonMenu history={this.props.history} />*/}
        <div className="demo3Box">
          666
        </div>
      </div>
    )
  };
}
function mapStateToProps(state) {
  const cateList = state.cateList;
  return {
    cateList:cateList.cateList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actionFN, dispatch)
  }
}


const Demo3 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo3;