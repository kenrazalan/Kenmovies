import {FETCH_TOP_RATED} from './topRatedType'
import axios from 'axios'

export const fetchTopRated = () => async dispatch =>{

        const res = await axios(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
        ) 
        dispatch({
            type: FETCH_TOP_RATED,
            payload: res.data
        })
    }

