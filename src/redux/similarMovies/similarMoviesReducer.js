import {FETCH_SIMILAR_MOVIES_REQUEST, FETCH_SIMILAR_MOVIES_SUCCESS} from './similarMoviesType'

const initialState = {
    item:{},
    loading: false
}


const similarMoviesReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_SIMILAR_MOVIES_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_SIMILAR_MOVIES_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default similarMoviesReducer