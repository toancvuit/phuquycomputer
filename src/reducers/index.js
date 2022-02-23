

import { combineReducers } from 'redux';
import hp from './hp';

const appReducers = combineReducers({
  hp
});

export function counter(state = 1, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('show action here');
      console.log(state);
      return state+1;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
export default appReducers;

