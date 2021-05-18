import {FETCH_TOP_RATED_REQUEST, FETCH_TOP_RATED_SUCCESS} from './topRatedType'

const initialState = {
    item:{},
    loading: false
}


const topRatedReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_TOP_RATED_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_TOP_RATED_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default topRatedReducer