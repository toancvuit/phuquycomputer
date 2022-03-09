import * as types from '../type/type'

var initState = {
    loading: true
}

const loading = (state=initState, action)=> {
    switch(action.type) {
        case types.LOADINGTRUE: 
            return {
                loading: true
            }
        case types.LOADINGFALSE: 
            return {
                loading: false
            }
        default: 
            return state;
    }
}
export default loading;