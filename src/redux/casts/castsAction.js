import {FETCH_CASTS} from './castsType'
import axios from 'axios'


export const fetchCasts = (category,movie_id) => async dispatch =>{
    const res = await axios(
        `https://api.themoviedb.org/3/${category}/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type: FETCH_CASTS,
        payload: res.data
    })
}
