import {FETCH_POPULAR_REQUEST,FETCH_POPULAR_SUCCESS} from './PopularType'

const initialState = {
    items: [],
    loading: false
}

const popularReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_POPULAR_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_POPULAR_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default popularReducer