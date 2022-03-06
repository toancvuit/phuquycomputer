

import { combineReducers } from 'redux';
import hp from './hp';
import counter from './counter';
import acer from './acer';
import dell from './dell';
import lenovo from './lenovo'

const appReducers = combineReducers({
  hp,counter,acer,dell,lenovo
});

export default appReducers;

