import * as type from '../type/type';

var initState = {
    data: {}
}

const lenovo = (state=initState, action)=>{
    switch(action.type) {
        
        case type.LENOVOGETLISTDATA:
            console.log('lenovo dell get list data' +action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default lenovo;