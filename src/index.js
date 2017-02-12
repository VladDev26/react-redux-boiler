import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import { Router, Route, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import App from './containers/App';

import {Home, News, Sale} from './components/Sections';

import Catalog from './containers/Catalog';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const initialState = {};

const store = configureStore(initialState);

// store.subscribe(()=>{
// 	console.log('st', store.getState());
// });

// browserHistory.listen( location =>  {
// 	console.log(location);
// });

let {Home, News, Sale, About, Contact} = Sections;

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
 				<Route path={'home'} component={Home} />
 				<Route path={'catalog'} component={Catalog} />
 				<Route path={'news'} component={News} />
 				<Route path={'sale'} component={Sale} />
 				<Route path={'about'} component={About} />
 				<Route path={'contact'} component={Contact} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('app')
);

