import {FETCH_CASTS_DETAILS, FETCH_CASTS_REQUEST, FETCH_CASTS_SUCCESS} from './castsDetailsType'

const initialState = {
    items: [],
    loading: false
}

// const castsDetailsReducer = (state=initialState,action) => {
//     switch(action.type){
//         case FETCH_CASTS_DETAILS:
//             return {
//                 items:action.payload
//             }
//         default:
//             return state
//     }
// }

const castsDetailsReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_CASTS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_CASTS_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default castsDetailsReducer