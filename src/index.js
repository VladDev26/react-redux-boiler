import React from 'react';
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import App from './containers/App';

import './styles/index.scss';


import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';

// const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const store = configureStore(initialState);

function helloReducer(state = {}, action) {
	switch (action.type) {
		case 'SOME_ACTION':
			return {...state};

		default:
			return state;
	}
}
function configureStore(initialState) {
    return createStore(
        combineReducers({helloReducer}),
        initialState,
        // composeEnhancers(applyMiddleware(thunk, logger))
        composeEnhancers(applyMiddleware(thunk))
    );
}


render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('app')
);




// render(
// 	<Provider store={store}>
// 		<Router history={hashHistory}>
// 			<Route path="/" component={App}>
// 				<Route path={'home'} component={Home} />
// 				<Route path={'news'} component={News} />
// 				<Route path={'sale'} component={Sale} />
// 			</Route>
// 		</Router>
// 	</Provider>
// 	, document.getElementById('app')
// );
