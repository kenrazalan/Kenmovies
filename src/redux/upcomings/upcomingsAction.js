import {FETCH_UPCOMINGS} from './upcomingsType'
import axios from 'axios'


export const fetchUpcomings = () => async dispatch =>{
    const res = await axios(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=f8f1429a9290056c3bfea1ac479a357f`
    )
    dispatch({
        type: FETCH_UPCOMINGS,
        payload: res.data
    })
}
