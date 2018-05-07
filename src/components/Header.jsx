import React from 'react'
import '../css/header'

export default class Header extends React.Component{
  render(){
    return (
      <div className="headerBox">
        This is <span className="active">header</span>
      </div>
    )
  }
}