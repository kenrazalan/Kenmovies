import {FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS} from './searchType'

const initialState = {
    items:{},
    loading: false
}

// const previewDetailsReducer =  (state=initialState,action)=>{
//     switch(action.type){
//         case FETCH_PREVIEW_DETAILS:
//             return {
//                 items:action.payload
//             }
//         default:
//             return state
//     }
// }
// export default previewDetailsReducer


const searchReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_SEARCH_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default searchReducer