import React from 'react'
import {render} from 'react-dom'
import Header from './Header'
import Content from './Content'

class Index extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content />
      </div>
    )
  }
}
render(<Index />, document.getElementById("box"))