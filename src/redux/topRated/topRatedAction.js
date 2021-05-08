import {FETCH_TOP_RATED} from './topRatedType'
import axios from 'axios'

function fetchTopRated (type,id){
    return async function(dispatch){
        const res = await axios(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=f8f1429a9290056c3bfea1ac479a357f`
        ) 
        dispatch({
            type: FETCH_TOP_RATED,
            payload: res.data
        })
    }
}

export default fetchTopRated