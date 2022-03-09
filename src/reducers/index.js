

import { combineReducers } from 'redux';
import hp from './hp';
import counter from './counter';
import acer from './acer';
import dell from './dell';
import lenovo from './lenovo';
import asus from './asus';
import loading from './loading'

const appReducers = combineReducers({
  hp,counter,acer,dell,lenovo,asus,loading
});

export default appReducers;

