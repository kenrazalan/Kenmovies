import {FETCH_CASTS_DETAILS} from './castsDetailsType'

const initialState = {
    items: []
}

const castsDetailsReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_CASTS_DETAILS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}
export default castsDetailsReducer