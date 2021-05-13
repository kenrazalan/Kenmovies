import {FETCH_CASTS_DETAILS} from './castsDetailsType'
import axios from 'axios'


export const fetchCastsDetails = (personId) => async dispatch =>{
    const res = await axios(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`
    )
    dispatch({
        type: FETCH_CASTS_DETAILS,
        payload: res.data
    })
}
