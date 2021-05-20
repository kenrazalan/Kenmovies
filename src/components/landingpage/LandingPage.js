import React, { useEffect } from 'react'
import Movies from '../movies//Movies'
import Banner from './Banner'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUpcomings,fetchTopRated, fetchTrending} from '../../redux'
import { motion } from 'framer-motion'
import Button from '../button/Button'
import GenreCard from '../genre/GenreCard'


function LandingPage() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUpcomings())
        dispatch(fetchTopRated())
        dispatch(fetchTrending())
    },[dispatch])
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
            <div style={{marginTop:"1.5rem"}}>
            <Movies results={trending?.results} title="Trending Movies"/>
            <Button link="trending" text="View All Trending Movies"/>
            <Movies results={topRated?.results} title="Top Rated Movies"/>
            <Button link="toprated" text="View All Top Rated Movies"/>
            </div>
        </motion.div>
    )
}

export default LandingPage
