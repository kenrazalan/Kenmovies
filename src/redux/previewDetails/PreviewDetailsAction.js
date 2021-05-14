import {FETCH_PREVIEW_DETAILS, FETCH_PREVIEW_DETAILS_REQUEST, FETCH_PREVIEW_DETAILS_SUCCESS} from './PreviewDetailsType'
import axios from 'axios'

// export const fetchPreviewDetails = (type,id) => async dispatch =>{
        
//         const res = await axios(
//             `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
//         ) 
//         dispatch({
//             type: FETCH_PREVIEW_DETAILS,
//             payload: res.data
//         })
//     }

    export const fetchPreviewDetailsRequest= () => {
        return{
            type: FETCH_PREVIEW_DETAILS_REQUEST,
        }
    }
    export const fetchPreviewDetailsSuccess= (data) => {
        return{
            type: FETCH_PREVIEW_DETAILS_SUCCESS,
            payload: data
        }
    }
    
    export const fetchPreviewDetails = (type,id) =>{
        return (dispatch) =>{
            dispatch(fetchPreviewDetailsRequest())
            axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res=>{
                const users = res.data
                dispatch(fetchPreviewDetailsSuccess(users))
            })
        }
    }
    