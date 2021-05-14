import {FETCH_PREVIEW_DETAILS_REQUEST, FETCH_PREVIEW_DETAILS_SUCCESS} from './PreviewDetailsType'

const initialState = {
    item:{},
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


const previewDetailsReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_PREVIEW_DETAILS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_PREVIEW_DETAILS_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default previewDetailsReducer