var initState = {
    isOpenModel: false
};
const hp = (state=initState, action)=>{
    switch(action.type) {
        case 'OPENHPMODEL':
        return {
            ...state, isOpenModel: !state.isOpenModel
        }
        default :
        return state;
    }
}
export default hp;