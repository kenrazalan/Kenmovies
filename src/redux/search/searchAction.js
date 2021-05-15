import {FETCH_SEARCH_REQUEST,FETCH_SEARCH_SUCCESS} from './searchType'
import axios from 'axios'

// export const fetchPreviewDetails = (type,id) => async dispatch =>{
        
//         const res = await axios(
//             `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
//         ) 
//         dispatch({
//             type: FETCH_PREVIEW_DETAILS,
//             payload: res.data
//         })
//     }

    export const fetchSearchRequest= () => {
        return{
            type: FETCH_SEARCH_REQUEST,
        }
    }
    export const fetchSearchSuccess= (data) => {
        return{
            type: FETCH_SEARCH_SUCCESS,
            payload: data
        }
    }
    
    export const fetchSearch = (query) =>{
        return (dispatch) =>{
            dispatch(fetchSearchRequest())
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
            .then(res=>{
                const search = res.data
                dispatch(fetchSearchSuccess(search))
            })
        }
    }
    