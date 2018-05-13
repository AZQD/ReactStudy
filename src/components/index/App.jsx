import React from 'react'
import Main from './Main'
import Content from './Content'
import '../../css/index/index';

export default class App extends React.Component{
  render (){
    return (
      <div className="wrapper">
        <div className="partLeft">
          <Main />
        </div>
        <div className="partRight">
          <Content />
        </div>
      </div>
    )
  }
}