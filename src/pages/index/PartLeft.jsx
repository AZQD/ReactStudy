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

          {/*路由切换*/}
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
            <Link to="/reactRender" replace>reactRender</Link>
          </li>
          <li className="mainLi">
            <Link to="/decorator" replace>Decorator</Link>
          </li>
          <li className="mainLi">
            <Link to="/useHoc" replace>useHoc</Link>
          </li>
          <li className="mainLi">
            <Link to="/cssTree" replace>csstree</Link>
          </li>
          <li className="mainLi">
            <Link to="/postcss" replace>postcss</Link>
          </li>
          <li className="mainLi">
            <Link to="/csstorn" replace>css to RN</Link>
          </li>

          {/*页面跳转*/}
          <li className="mainLi">
            <a href="./redux.html">redux.html</a>
          </li>
          <li className="mainLi">
            <a href="./test.html">test.html</a>
          </li>
        </ul>
      </div>
    )
  }
}