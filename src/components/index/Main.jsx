import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class Main extends React.Component{
  render (){
    return (
      <div className="mainBox">
        <ul className="mainUl">
          <li className="mainLi">
            <Link to="/home" replace>Home</Link>
          </li>
          <li className="mainLi">
            <Link to="/about" replace>About</Link>
          </li>
          <li className="mainLi">
            <Link to="/menu" replace>Menu</Link>
          </li>
        </ul>
      </div>
    )
  }
}