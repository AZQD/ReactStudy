import React from 'react';
import { hot } from 'react-hot-loader/root';

import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
// import hashHistory from 'react-dom';
// console.log("hashHistory",hashHistory);
import PartLeft from './PartLeft';
import PartRight from './PartRight';
import '@assets/common.less';
import './App.less';
function App () {
    return (
        <Router>
            <div className="wrapper">
                <div className="partLeft">
                    <PartLeft/>
                </div>
                <div className="partRight">
                    <PartRight/>
                </div>
            </div>
        </Router>
    )
}

export default hot(App);