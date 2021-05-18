import {FETCH_POPULAR_REQUEST,FETCH_POPULAR_SUCCESS} from './PopularType'
import axios from 'axios'

export const fetchPopularRequest= () => {
    return{
        type: FETCH_POPULAR_REQUEST,
    }
}
export const fetchPopularSuccess= (data) => {
    return{
        type: FETCH_POPULAR_SUCCESS,
        payload: data
    }
}

export const fetchPopular = (page=1) =>{
    return (dispatch) =>{
        dispatch(fetchPopularRequest())      
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchPopularSuccess(data))
        })
    }
}

