import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'

class Index extends React.Component {
  render() {
    return (
      <Header />
    )
  }
}
render(<Index />, document.getElementById("box"))