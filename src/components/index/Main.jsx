import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class Main extends React.Component{
  render (){
    let data = {a:1, b:2};
    let path = {
      pathname:"/about",
      aa:data
    };
    let reduxDemo1 = {
      pathname: '/reduxDemo1',
      test: {a:1}
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
            <Link to={reduxDemo1} replace>Redex Demo1</Link>
          </li>
          <li className="mainLi">
            <Link to="/reduxDemo2" replace>Redex Demo2</Link>
          </li>
        </ul>
      </div>
    )
  }
}