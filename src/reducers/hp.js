import * as type from '../type/type'
var initState = {
    isOpenModel: false,
    data: {}
};
const hp = (state=initState, action)=>{
    switch(action.type) {
        case 'OPENHPMODEL':
        return {
            ...state, isOpenModel: !state.isOpenModel
        }
        case type.HPGETLIST: 
            console.log('reducer hp get list');
            return{
                ...state
            }
        case type.HPGETLISTDATA:
            console.log('reducer hp get list data' +action.data)
            console.log(action.data)
            return {
                ...state,data:action.data

            }
        default :
        return state;
    }
}
export default hp;