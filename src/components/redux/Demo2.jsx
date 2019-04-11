import React from 'react'
import '../../css/test/header'

export default class Demo2 extends React.Component{
  render(){
    return (
      <div className="headerBox">
        This is <span className="active">header</span>
      </div>
    )
  }
}