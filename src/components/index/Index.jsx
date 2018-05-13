import React from 'react'
import {render} from 'react-dom'
import {Router , Route, Link, Switch} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from './App'
import '../../../static/css/public'
import '../../../static/js/public'
import createHistory from 'history/createHashHistory'
const history = createHistory()

export default class Index extends React.Component{
  render (){
    return (
      <Router history={history}>
        <App />
      </Router>
    )
  }
}
render(<Index/>, document.getElementById("box"))