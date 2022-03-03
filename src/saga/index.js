/* eslint-disable no-constant-condition */

import { put, takeEvery, delay } from 'redux-saga/effects'
import { hpgetlistdata } from '../action/hp';
import axios from 'axios';
import * as server from '../config';
import * as types from '../type/type'

export function* incrementAsync() {
  console.log('call saga');
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}
export function* hpgetlistdataa() {
  var temp;
  yield axios.get(server.SERVER_URL+'/hp')
  .then(res=>res.data.datas)
  .then(res=> {
      temp = res.filterModel;
      console.log(temp)      
  }).catch(err=>{
    console.log(err)
  })
  yield  put({
    type: types.HPGETLISTDATA,
    data: temp
  })

}
export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeEvery(types.HPGETLIST, hpgetlistdataa)
}
