

import { combineReducers } from 'redux';
import hp from './hp';
import counter from './counter'

const appReducers = combineReducers({
  hp,counter
});

export default appReducers;

