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
  let temp;
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

export function* acergetlistdata() {
  let temp;
  yield axios.get(server.SERVER_URL+'/acer')
  .then(res=>res.data.datas)
  .then(res=> {
      temp = res.filterModel;
      console.log(temp)      
  }).catch(err=>{
    console.log(err)
  })
  yield  put({
    type: types.ACERGETLISTDATA,
    data: temp
  })
}

export function* dellgetlistdata() {
  let temp;
  yield axios.get(server.SERVER_URL+'/dell')
  .then(res=>res.data.datas)
  .then(res=> {
      temp = res.filterModel;
      console.log(temp)      
  }).catch(err=>{
    console.log(err)
  })
  yield  put({
    type: types.DELLGETLISTDATA,
    data: temp
  })
}
export function* lenovogetlistdata() {
  let temp;
  console.log('lenovo get list data');
  yield axios.get(server.SERVER_URL+'/lenovo')
  .then(res=>res.data.datas)
  .then(res=> {
      temp = res.filterModel;
      console.log(temp)      
  }).catch(err=>{
    console.log(err)
  })
  yield  put({
    type: types.LENOVOGETLISTDATA,
    data: temp
  })
}

export function* asusgetlistdata() {
  yield put({
    type: types.LOADINGTRUE
  })
  let temp;
  console.log('asus get list data');
  yield axios.get(server.SERVER_URL+'/asus')
  .then(res=>res.data.datas)
  .then(res=> {
      temp = res.filterModel;
      console.log(temp)      
  }).catch(err=>{
    console.log(err)
  })
  yield put({
    type: types.LOADINGFALSE
  })
  yield  put({
    type: types.ASUSGETLISTDATA,
    data: temp
  })
}
export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeEvery(types.HPGETLIST, hpgetlistdataa)
  yield takeEvery(types.ACERGETLIST, acergetlistdata)
  yield takeEvery(types.DELLGETLIST, dellgetlistdata)
  yield takeEvery(types.LENOVOGETLIST, lenovogetlistdata)
  yield takeEvery(types.ASUSGETLIST, asusgetlistdata)
}
