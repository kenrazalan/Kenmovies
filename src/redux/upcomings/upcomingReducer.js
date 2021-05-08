
import {FETCH_UPCOMINGS} from './upcomingsType'

const initialState = {
    items: []
}

const upcomingsReducers =  (state=initialState,action)=>{
    switch(action.type){
        case FETCH_UPCOMINGS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}
export default upcomingsReducers