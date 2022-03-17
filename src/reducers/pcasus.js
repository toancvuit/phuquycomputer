import * as type from '../type/type';

var initState = {
    data: {}
}

const pcasus = (state=initState, action)=>{
    switch(action.type) {
        
        case type.ASUSPCGETLISTDATA:
            console.log('asus pc get list data show' +action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default pcasus;