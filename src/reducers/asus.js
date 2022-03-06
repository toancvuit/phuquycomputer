import * as type from '../type/type';

var initState = {
    data: {}
}

const asus = (state=initState, action)=>{
    switch(action.type) {
        
        case type.ASUSGETLISTDATA:
            console.log('asus get list data' +action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default asus;