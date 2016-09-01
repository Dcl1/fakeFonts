import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Featured from './Featured';
import './index.css';
import HeaderBar from './components/headerBar';

import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';


ReactDOM.render(
 (
 	<Router history={browserHistory}>
 		<Route path="/" component={HeaderBar}  >
 			<IndexRoute component={App} />
 			<Route path="featured" component={Featured} />
 		</Route>
 	</Router>
 ),document.getElementById('root')
);
