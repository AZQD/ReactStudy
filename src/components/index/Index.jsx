import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from './App'

export default class Index extends React.Component{
  render (){
    return (
      <Router>
        <App />
      </Router>
    )
  }
}
render(<Index/>, document.getElementById("box"))