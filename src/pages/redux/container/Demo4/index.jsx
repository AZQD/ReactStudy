import React, {Component} from 'react';
import CommonMenu from '../CommonMenu';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionFN from '../../action'

class CateList extends Component {

  componentDidMount() {

  }

  render() {
    console.log('Demo4', this.props);
    return (
      <div>
        <CommonMenu history={this.props.history} />
        12345
      </div>
    )
  };
}

function mapStateToProps(state) {
  const handleList = state.handleList;
  return {
    cateList: handleList.cateList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actionFN, dispatch)
  }
}

const Demo4 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo4;