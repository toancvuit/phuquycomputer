import * as type from '../type/type';
var initState = {
    // isOpenModel: false,
    data: {}
};
const acer = (state=initState, action)=>{
    switch(action.type) {
        
        case type.ACERGETLISTDATA:
            console.log('reducer acer get list data' +action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default acer;