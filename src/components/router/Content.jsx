import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topic = () => (
  <div>
    <h2>Topic</h2>
  </div>
);

export default class Content extends React.Component{
  render (){
    return (
      <div>
        <Route exact path="/router/home" component={Home} />
        <Route exact path="/router/about" component={About} />
        <Route exact path="/router/topic" component={Topic} />
      </div>
    )
  }
}