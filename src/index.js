import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Featured from './Featured';
import './index.css';
import { combineReducers } from 'redux';
//import HeaderBar from './components/headerBar';

import HeaderContainer from './containers/headerContainer';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as AppReducers from './reducers';

import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';


const reducer = combineReducers(AppReducers);
let store = createStore(reducer);

ReactDOM.render(
 (
 	<Provider store={store} >
	 	<Router history={browserHistory}>
	 		<Route path="/" component={HeaderContainer}  >
	 			<IndexRoute component={App} />
	 			<Route path="featured" component={Featured} />
	 		</Route>
	 	</Router>
 	</Provider>
 ),document.getElementById('root')
);


