import * as type from '../type/type';

var initState = {
    data: {}
}

const dell = (state=initState, action)=>{
    switch(action.type) {
        
        case type.DELLGETLISTDATA:
            console.log('reducer dell get list data' +action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default dell;