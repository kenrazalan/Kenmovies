import {FETCH_PREVIEW_DETAILS} from './PreviewDetailsType'
import axios from 'axios'

export const fetchPreviewDetails = (type,id) => async dispatch =>{
        
        const res = await axios(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        ) 
        dispatch({
            type: FETCH_PREVIEW_DETAILS,
            payload: res.data
        })
    }
