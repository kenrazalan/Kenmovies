import {FETCH_PREVIEW_DETAILS} from './PreviewDetailsType'

const initialState = {
    item:{}
}

const previewDetailsReducer =  (state=initialState,action)=>{
    switch(action.type){
        case FETCH_PREVIEW_DETAILS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}
export default previewDetailsReducer