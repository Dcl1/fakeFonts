import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Featured from './Featured';
import './index.css';

import { Router, Route, Link, browserHistory } from 'react-router';


ReactDOM.render(
 (
 	<Router history={browserHistory}>
 		<Route path="/" component={App} />
 		<Route path="featured" component={Featured} />
 	</Router>
 ),document.getElementById('root')
);
