import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import ReactRender from './component/ReactRender'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = (props) => (
  <div>
    {console.log("props", props)}
    <h2>About</h2>
  </div>
);
const Menu = ({match}) => (
  <div className="listBox">
    <ul className="listUl">
      <li className="listLi">
        <h3>
          <Link to={`${match.url}/item1`} replace>item1</Link>
        </h3>
      </li>
      <li className="listLi">
        <h3>
          <Link to={`${match.url}/item2`} replace>item2</Link>
        </h3>
      </li>
      <li className="listLi">
        <h3>
          <Link to={`${match.url}/item3`} replace>item3</Link>
        </h3>
      </li>
    </ul>
    <div className="listRouter">
      <Route path={`${match.url}/:itemId`} component={Item}/>
      <Route exact path={match.url} render={() => <h3>Please select a item.</h3>}/>
    </div>
  </div>
);

const Item = ({match}) => (
  <div>
    {console.log(match)}
    <h3>This is the {match.params.itemId}</h3>
    <Link to="/">Back</Link>
  </div>
);

export default class PartRight extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/reactRender" component={ReactRender}/>
      </Switch>
    )
  }
}