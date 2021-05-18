import {FETCH_PEOPLE_REQUEST,FETCH_PEOPLE_SUCCESS} from './PeopleType'
import axios from 'axios'

export const fetchPeopleRequest= () => {
    return{
        type: FETCH_PEOPLE_REQUEST,
    }
}
export const fetchPeopleSuccess= (data) => {
    return{
        type: FETCH_PEOPLE_SUCCESS,
        payload: data
    }
}

export const fetchPeople = (page=1) =>{
    return (dispatch) =>{
        dispatch(fetchPeopleRequest())      
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then(res=>{
            const data = res.data
            dispatch(fetchPeopleSuccess(data))
        })
    }
}

