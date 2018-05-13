import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default class Main extends React.Component{
  render (){
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
        </ul>
      </div>
    )
  }
}