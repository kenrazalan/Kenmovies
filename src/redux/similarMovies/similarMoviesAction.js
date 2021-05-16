import {FETCH_SIMILAR_MOVIES_REQUEST, FETCH_SIMILAR_MOVIES_SUCCESS} from './similarMoviesType'
import axios from 'axios'


export const fetchSimilarMoviesRequest= () => {
    return{
        type: FETCH_SIMILAR_MOVIES_REQUEST,
    }
}
export const fetchSimilarMoviesSuccess= (data) => {
    return{
        type: FETCH_SIMILAR_MOVIES_SUCCESS,
        payload: data
    }
}

export const fetchSimilarMovies = (type,id) =>{
    return (dispatch) =>{
        dispatch(fetchSimilarMoviesRequest())
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
        .then(res=>{
            const users = res.data
            dispatch(fetchSimilarMoviesSuccess(users))
        })
    }
}
