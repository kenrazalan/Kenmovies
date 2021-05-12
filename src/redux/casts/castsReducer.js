import {FETCH_CASTS} from './castsType'

const initialState = {
    items: []
}

const castsReducer =  (state=initialState,action)=>{
    switch(action.type){
        case FETCH_CASTS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}
export default castsReducer