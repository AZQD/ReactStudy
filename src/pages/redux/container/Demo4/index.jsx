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
    const handleForm = this.props.handleForm;
    const formReset = this.props.action.formReset;
    return (
      <div>
        <CommonMenu history={this.props.history} />
        <div>{handleForm.name}</div>
        <div>{handleForm.phone}</div>
        <button onClick={formReset}>清空DEMO3的表单</button>
      </div>
    )
  };
}

function mapStateToProps(state) {
  const handleForm = state.handleForm;
  return {
    handleForm: handleForm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actionFN, dispatch)
  }
}

const Demo4 = connect(mapStateToProps, mapDispatchToProps)(CateList);

export default Demo4;