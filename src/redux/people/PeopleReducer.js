
import {FETCH_PEOPLE_REQUEST,FETCH_PEOPLE_SUCCESS} from './PeopleType'

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

const peopleReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_PEOPLE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_PEOPLE_SUCCESS:
            return {
                loading: false,
                items:action.payload
            }
        default:
            return state
    }
}
export default peopleReducer