import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class Main extends React.Component{
  render (){
    return (
      <div>
        <ul>
          <li>
            <Link to="/router/home">Home</Link>
          </li>
          <li>
            <Link to="/router/about">About</Link>
          </li>
          <li>
            <Link to="/router/topic">Topic</Link>
          </li>
        </ul>
      </div>
    )
  }
}