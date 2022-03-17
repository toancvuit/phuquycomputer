import * as type from '../type/type';

var initState = {
    data: {}
}

const pchp = (state=initState, action)=>{
    switch(action.type) {
        
        case type.HPPCGETLISTDATA:
            // console.log(action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default pchp;