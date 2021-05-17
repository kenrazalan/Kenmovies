import {FETCH_UPCOMINGS_REQUEST,FETCH_UPCOMINGS_SUCCESS} from './upcomingsType'

const initialState = {
    item:{},
    loading: false
}


const upcomingsReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_UPCOMINGS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_UPCOMINGS_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default upcomingsReducer