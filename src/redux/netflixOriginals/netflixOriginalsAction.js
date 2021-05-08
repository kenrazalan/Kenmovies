import {FETCH_NETFLIX_ORIGINALS} from './netflixOriginalsType'
import axios from 'axios'


export const fetchNetflixOriginals = () => async dispatch =>{
    const res = await axios(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
    )
    dispatch({
        type: FETCH_NETFLIX_ORIGINALS,
        payload: res.data
    })
}
