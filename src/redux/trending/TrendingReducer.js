import {FETCH_TRENDING_REQUEST, FETCH_TRENDING_SUCCESS} from './TrendingType'

const initialState = {
    items:{},
    loading: false
}


const trendingReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_TRENDING_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_TRENDING_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default trendingReducer