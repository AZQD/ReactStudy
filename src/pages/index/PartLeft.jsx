import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class PartLeft extends React.Component {
  render() {
    let path = {
      pathname: "/about",
      params: {
        a: 1,
        b: 2
      }
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
          <li className="mainLi">
            <a href="/redux.html">redux.html</a>
          </li>
          <li className="mainLi">
            <a href="/test.html">test.html</a>
          </li>
        </ul>
      </div>
    )
  }
}