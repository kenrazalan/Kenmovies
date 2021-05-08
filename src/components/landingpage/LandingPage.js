import React, { useEffect } from 'react'
import Movies from '../movies//Movies'
import Banner from './Banner'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUpcomings} from '../../redux'

function LandingPage() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUpcomings())
    },[dispatch])
    const upcomings = useSelector(state => state.upcomings.items) 
    console.log(upcomings)
    return (
        <>
            <Banner/>
            <Movies results={upcomings} title="Upcoming Movies"/>
        </>
    )
}

export default LandingPage
