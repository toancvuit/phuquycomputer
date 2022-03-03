import * as type from '../type/type';
import axios from 'axios';
import * as server from '../config'

export const hpgetlist = () => {
    // return (dispatch) => {
   
    
    //call api here chua fix dc
    console.log('action hp get list');
    return {
        type: type.HPGETLIST,
        data: 'data'
    }
}


