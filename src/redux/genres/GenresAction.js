import {FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS} from './GenresType'
import axios from 'axios'

export const fetchGenresRequest= () => {
    return{
        type: FETCH_GENRES_REQUEST,
    }
}
export const fetchGenresSuccess= (data) => {
    return{
        type: FETCH_GENRES_SUCCESS,
        payload: data
    }
}

export const fetchGenres = () =>{
    return (dispatch) =>{
        dispatch(fetchGenresRequest())
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchGenresSuccess(data))
        })
    }
}
