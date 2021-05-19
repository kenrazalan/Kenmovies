import {FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS} from './GenresType'

const initialState = {
    items: [],
    loading: false
}


const genresReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_GENRES_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_GENRES_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default genresReducer