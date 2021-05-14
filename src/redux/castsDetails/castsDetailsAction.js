import {FETCH_CASTS_REQUEST,FETCH_CASTS_SUCCESS} from './castsDetailsType'
import axios from 'axios'


// export const fetchCastsDetails = (personId) => async dispatch =>{
//     const res = await axios(
//         `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`
//     )
//     dispatch({
//         type: FETCH_CASTS_DETAILS,
//         payload: res.data
//     })
// }
export const fetchCastsRequest= () => {
    return{
        type: FETCH_CASTS_REQUEST,
    }
}
export const fetchCastsSuccess= (data) => {
    return{
        type: FETCH_CASTS_SUCCESS,
        payload: data
    }
}

export const fetchCastsDetails = (personId) =>{
    return (dispatch) =>{
        dispatch(fetchCastsRequest())
        axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res=>{
            const users = res.data
            dispatch(fetchCastsSuccess(users))
        })
    }
}
