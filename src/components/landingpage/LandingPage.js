import React, { useEffect } from 'react'
import Movies from '../movies//Movies'
import Banner from './Banner'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUpcomings,fetchTopRated} from '../../redux'

function LandingPage() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUpcomings())
        dispatch(fetchTopRated())
    },[dispatch])
    const upcomings = useSelector(state => state.upcomings.items) 
    const topRated = useSelector(state => state.topRated.items) 
    console.log(upcomings)
    console.log(topRated)
    return (
        <>
            <Banner/>
            <Movies results={upcomings} title="Upcoming Movies"/>
            <Movies results={topRated} title="Top Rated Movies"/>
        </>
    )
}

export default LandingPage
