

import { combineReducers } from 'redux';
import hp from './hp';
import counter from './counter';
import acer from './acer';
import dell from './dell';
import lenovo from './lenovo';
import asus from './asus'

const appReducers = combineReducers({
  hp,counter,acer,dell,lenovo,asus
});

export default appReducers;

