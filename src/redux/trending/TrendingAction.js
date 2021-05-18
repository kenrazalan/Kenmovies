import {FETCH_TRENDING_REQUEST, FETCH_TRENDING_SUCCESS} from './TrendingType'
import axios from 'axios'


export const fetchTrendingRequest= () => {
    return{
        type: FETCH_TRENDING_REQUEST,
    }
}
export const fetchTrendingSuccess= (data) => {
    return{
        type: FETCH_TRENDING_SUCCESS,
        payload: data
    }
}

export const fetchTrending = () =>{
    return (dispatch) =>{
        dispatch(fetchTrendingRequest())
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`)
        .then(res=>{
            const data = res.data
            dispatch(fetchTrendingSuccess(data))
        })
    }
}
