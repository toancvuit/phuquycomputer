import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
//configure to server
export const sagaMiddleware = createSagaMiddleware();

//local store and server configure to debug

// export const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// export const SERVER_URL = 'http://127.0.0.1:4001'
export const SERVER_URL = 'https://phuquy-server.herokuapp.com'