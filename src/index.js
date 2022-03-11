import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import * as configure from './config'
import rootSaga from './saga';
import reducer from './reducers';
import {Provider} from 'react-redux'
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
//add develop redux dev tool
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
// const store = createStore(reducer, applyMiddleware(sagaMiddleware))));
configure.sagaMiddleware.run(rootSaga);




ReactDOM.render(
  <Provider store ={configure.store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
