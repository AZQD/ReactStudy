import React from 'react'
import Main from './Main'
import Content from './Content'

export default class App extends React.Component{
  render (){
    return (
      <div>
        <Main />
        <hr/>
        <Content />
      </div>
    )
  }
}