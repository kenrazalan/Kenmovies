import {FETCH_UPCOMINGS_REQUEST,FETCH_UPCOMINGS_SUCCESS} from './upcomingsType'
import axios from 'axios'


// export const fetchUpcomings = (page=1) => async dispatch =>{
//     const res = await axios(
//         `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
//     )
//     dispatch({
//         type: FETCH_UPCOMINGS,
//         payload: res.data
//     })
// }

export const fetchUpcomingsRequest= () => {
    return{
        type: FETCH_UPCOMINGS_REQUEST,
    }
}
export const fetchUpcomingsSuccess= (data) => {
    return{
        type: FETCH_UPCOMINGS_SUCCESS,
        payload: data
    }
}

export const fetchUpcomings = (page=1) =>{
    return (dispatch) =>{
        dispatch(fetchUpcomingsRequest())
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchUpcomingsSuccess(data))
        })
    }
}
