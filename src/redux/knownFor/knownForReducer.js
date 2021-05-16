import {FETCH_KNOWN_FOR_REQUEST,FETCH_KNOWN_FOR_SUCCESS} from './knownForType'

const initialState = {
    items: [],
    loading: false
}


const knownForReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_KNOWN_FOR_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_KNOWN_FOR_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default knownForReducer