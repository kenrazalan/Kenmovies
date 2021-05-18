import {FETCH_TOP_RATED_REQUEST, FETCH_TOP_RATED_SUCCESS} from './topRatedType'
import axios from 'axios'


export const fetchTopRatedRequest= () => {
    return{
        type: FETCH_TOP_RATED_REQUEST,
    }
}
export const fetchTopRatedSuccess= (data) => {
    return{
        type: FETCH_TOP_RATED_SUCCESS,
        payload: data
    }
}

export const fetchTopRated = (page=1) =>{
    return (dispatch) =>{
        dispatch(fetchTopRatedRequest())
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchTopRatedSuccess(data))
        })
    }
}
