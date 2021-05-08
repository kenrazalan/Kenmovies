import {FETCH_NETFLIX_ORIGINALS} from './netflixOriginalsType'

const initialState = {
    items: []
}

const netflixOriginalsReducer =  (state=initialState,action)=>{
    switch(action.type){
        case FETCH_NETFLIX_ORIGINALS:
            return {
                items:action.payload
            }
        default:
            return state
    }
}
export default netflixOriginalsReducer