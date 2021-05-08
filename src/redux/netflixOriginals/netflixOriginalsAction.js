import {FETCH_NETFLIX_ORIGINALS} from './netflixOriginalsType'
import axios from 'axios'

export const fetchNetflixOriginals = () => async dispatch =>{
    const res = await axios(
        `https://api.themoviedb.org/3/discover/tv?api_key=f8f1429a9290056c3bfea1ac479a357f&with_networks=213`
    )
    dispatch({
        type: FETCH_NETFLIX_ORIGINALS,
        payload: res.data
    })
}
