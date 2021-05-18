import React, { useEffect } from 'react'
import Movies from '../movies//Movies'
import Banner from './Banner'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUpcomings,fetchTopRated, fetchTrending} from '../../redux'
import { motion } from 'framer-motion'

function LandingPage() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUpcomings())
        dispatch(fetchTopRated())
        dispatch(fetchTrending())
    },[dispatch])
    const upcomings = useSelector(state => state.upcomings.items) 
    const topRated = useSelector(state => state.topRated.items) 
    const trending = useSelector(state => state.trending.items)

    const landingPageVariants={
        hidden:{
            x:'-100vw'
        },
        visible:{
            x:0,
            transition:{
                type:'tween',
                duration:.4
            }
        },
        exit:{
            x:'-100vw',
        }
    
    }
    return (
        <motion.div
        variants={landingPageVariants}
        initial='hidden'
        animate='visible'
        exit={{x:'-100%'}} >
            <Banner/>
            <Movies results={trending?.results} title="Trending Movies"/>
            <Movies results={topRated?.results} title="Top Rated Movies"/>
        </motion.div>
    )
}

export default LandingPage
