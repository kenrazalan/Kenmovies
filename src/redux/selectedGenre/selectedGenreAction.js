import {FETCH_SELECTED_GENRE_REQUEST, FETCH_SELECTED_GENRE_SUCCESS} from './selectedGenreType'
import axios from 'axios'

export const fetchSelectedGenreRequest= () => {
    return{
        type: FETCH_SELECTED_GENRE_REQUEST,
    }
}
export const fetchSelectedGenreSuccess= (data) => {
    return{
        type: FETCH_SELECTED_GENRE_SUCCESS,
        payload: data
    }
}

export const fetchSelectedGenre = (genreId,page=1) =>{
    return (dispatch) =>{
        dispatch(fetchSelectedGenreRequest())
      
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&with_genres=${genreId}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchSelectedGenreSuccess(data))
        })
    }
}
