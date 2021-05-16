import {FETCH_NETFLIX_ORIGINALS_REQUEST,FETCH_NETFLIX_ORIGINALS_SUCCESS} from './netflixOriginalsType'
import axios from 'axios'



// export const fetchNetflixOriginals = () => async dispatch =>{
//     const res = await axios(
//         `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
//     )
//     dispatch({
//         type: FETCH_NETFLIX_ORIGINALS,
//         payload: res.data
//     })
// }

export const fetchNetflixOriginalsRequest= () => {
    return{
        type: FETCH_NETFLIX_ORIGINALS_REQUEST,
    }
}
export const fetchNetflixOriginalsSuccess= (data) => {
    return{
        type: FETCH_NETFLIX_ORIGINALS_SUCCESS,
        payload: data
    }
}

export const fetchNetflixOriginals = () =>{
    const random =  Math.floor(Math.random()* 19)
    return (dispatch) =>{
        dispatch(fetchNetflixOriginalsRequest())
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${random}&sort_by=popularity.desc`)
        .then(res=>{
            const users = res.data
            dispatch(fetchNetflixOriginalsSuccess(users))
        })
    }
}

