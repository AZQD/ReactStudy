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
const Topics = ({match}) => (
  <div className="listBox">
    <ul className="listUl">
      <li className="listLi">
        <h3>
          <Link to={`${match.url}/topic1`} replace>topic1</Link>
        </h3>
      </li>
      <li className="listLi">
        <h3>
          <Link to={`${match.url}/topic2`} replace>topic2</Link>
        </h3>
      </li>
      <li className="listLi">
        <h3>
          <Link to={`${match.url}/topic3`} replace>topic3</Link>
        </h3>
      </li>
    </ul>
    <div className="listRouter">
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
    </div>
  </div>
);

const Topic = ({match}) => (
  <div>
    <h3>This is the {match.params.topicId}</h3>
    <Link to="/">Back</Link>
  </div>
);

export default class Content extends React.Component{
  render (){
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    )
  }
}