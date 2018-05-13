import React from 'react'
import Main from '../../components/router/Main'
import Content from '../../components/router/Content'

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