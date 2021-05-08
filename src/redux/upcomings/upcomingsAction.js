import {FETCH_UPCOMINGS} from './upcomingsType'
import axios from 'axios'


export const fetchUpcomings = () => async dispatch =>{
    const res = await axios(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type: FETCH_UPCOMINGS,
        payload: res.data
    })
}
