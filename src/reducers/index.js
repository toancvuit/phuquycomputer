

import { combineReducers } from 'redux';
import hp from './hp';
import counter from './counter';
import acer from './acer';
import dell from './dell'

const appReducers = combineReducers({
  hp,counter,acer,dell
});

export default appReducers;

