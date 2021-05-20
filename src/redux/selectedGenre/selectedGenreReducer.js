import {FETCH_SELECTED_GENRE_REQUEST, FETCH_SELECTED_GENRE_SUCCESS} from './selectedGenreType'

const initialState = {
    item:{},
    loading: false
}


const selectedGenreReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_SELECTED_GENRE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_SELECTED_GENRE_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default selectedGenreReducer
