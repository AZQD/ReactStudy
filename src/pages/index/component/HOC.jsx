import React from 'react'
import ReactDOM from 'react-dom'

export default class HOC extends React.Component{

  @testtable
  test(){}
  render(){
    return <div>12345</div>
  }
}

function testtable(target, b, c) {
  console.log(target, b,c);
}