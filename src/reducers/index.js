

import { combineReducers } from 'redux';
import hp from './hp';
import counter from './counter';
import acer from './acer';
import dell from './dell';
import lenovo from './lenovo';
import asus from './asus';
import loading from './loading';
import pcasus from './pcasus'

const appReducers = combineReducers({
  hp,counter,acer,dell,lenovo,asus,loading,pcasus
});

export default appReducers;

