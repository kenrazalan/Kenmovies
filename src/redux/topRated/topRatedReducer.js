import {FETCH_TOP_RATED} from './topRatedType'

const initialState = {
    item:{}
}

const topRatedReducer =  (state=initialState,action)=>{
    switch(action.type){
        case FETCH_TOP_RATED:
            return {
                item:action.payload
            }
        default:
            return state
    }
}
export default topRatedReducer