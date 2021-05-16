import {FETCH_KNOWN_FOR_REQUEST,FETCH_KNOWN_FOR_SUCCESS} from './knownForType'
import axios from 'axios'


export const fetchKnownForRequest= () => {
    return{
        type: FETCH_KNOWN_FOR_REQUEST,
    }
}
export const fetchKnownForSuccess= (data) => {
    return{
        type: FETCH_KNOWN_FOR_SUCCESS,
        payload: data
    }
}

export const fetchKnownFor = (person_id) =>{
    return (dispatch) =>{
        dispatch(fetchKnownForRequest())
        axios.get(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchKnownForSuccess(data))
        })
    }
}

