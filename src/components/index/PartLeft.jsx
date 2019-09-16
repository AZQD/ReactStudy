import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class PartLeft extends React.Component{
  render (){
    let data = {a:1, b:2};
    let path = {
      pathname:"/about",
      aa:data
    };
    return (
      <div className="mainBox">
        <ul className="mainUl">
          <li className="mainLi">
            <Link to="/home" replace>Home</Link>
          </li>
          <li className="mainLi">
            <Link to={path} replace>About</Link>
          </li>
          <li className="mainLi">
            <Link to="/menu" replace>Menu</Link>
          </li>
        </ul>
      </div>
    )
  }
}