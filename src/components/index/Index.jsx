import React from 'react'
import {render} from 'react-dom'
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import PartLeft from './PartLeft'
import PartRight from './PartRight'
import '../../../static/js/public.js'
import '../../../static/css/public.css'
import '../../css/index/index.less'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import hashHistory from 'react-dom'
// console.log("hashHistory",hashHistory);

export default class Index extends React.Component{
  render (){
    return (
      <Router>
        <div className="wrapper">
          <div className="partLeft">
            <PartLeft />
          </div>
          <div className="partRight">
            <PartRight />
          </div>
        </div>
      </Router>
    )
  }
}
render(<Index/>, document.getElementById("box"));