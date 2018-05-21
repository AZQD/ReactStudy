import React from 'react'
import {render} from 'react-dom'
// import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from './App'
import '../../../static/css/public'
import '../../../static/js/public'
import browserHistory from 'react-dom'
console.log(browserHistory);
// import createHistory from 'history/createHashHistory'
// const history = createHistory()

export default class Index extends React.Component{
  render (){
    return (
      <Router history={browserHistory}>
        <App />
      </Router>
    )
  }
}
render(<Index/>, document.getElementById("box"))