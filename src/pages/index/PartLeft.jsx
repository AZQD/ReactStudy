import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class PartLeft extends React.Component {
  render () {
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
          <li className="mainLi">
            <Link to="/setState" replace>setState</Link>
          </li>
          <li className="mainLi">
            <Link to="/hooks" replace>Hooks</Link>
          </li>
          <li className="mainLi">
            <Link to="/immutable" replace>Immutable</Link>
          </li>
          <li className="mainLi">
            <Link to="/lazyload" replace>Lazyload</Link>
          </li>
          <li className="mainLi">
            <Link to="/props" replace>Props</Link>
          </li>
          <li className="mainLi">
            <Link to="/qs" replace>qs</Link>
          </li>
          <li className="mainLi">
            <Link to="/log" replace>log</Link>
          </li>
          <li className="mainLi">
            <Link to="/xss" replace>XSS</Link>
          </li>
          <li className="mainLi">
            <Link to="/chimee" replace>Chimee</Link>
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