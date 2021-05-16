
import {FETCH_NETFLIX_ORIGINALS_REQUEST,FETCH_NETFLIX_ORIGINALS_SUCCESS} from './netflixOriginalsType'

const initialState = {
    items: [],
    loading: false
}

// const netflixOriginalsReducer =  (state=initialState,action)=>{
//     switch(action.type){
//         case FETCH_NETFLIX_ORIGINALS:
//             return {
//                 items:action.payload
//             }
//         default:
//             return state
//     }
// }

const netflixOriginalsReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_NETFLIX_ORIGINALS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_NETFLIX_ORIGINALS_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default netflixOriginalsReducer