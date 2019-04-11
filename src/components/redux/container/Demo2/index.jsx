import React from 'react'
import CommonMenu from '../CommonMenu/index'

export default class Demo2 extends React.Component {
  render() {
    return (
      <div className="headerBox">
        <CommonMenu history={this.props.history}/>
        This is <span className="active">Demo2</span>
      </div>
    )
  }
}