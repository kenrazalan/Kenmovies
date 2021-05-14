import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { fetchCastsDetails } from '../../redux'
import { truncateString } from '../landingpage/truncateString'
import { PersonsWrapper } from './style'
import background from './../../images/background.jpg'
import { motion } from 'framer-motion'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton'

function Persons() {
    const dispatch = useDispatch();
    const {id} = useParams()
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchCastsDetails(id)) 
        // dispatch(fetchCastsDetails(id))
    },[dispatch,id])

    const castsDetails = useSelector(state => state.castsDetails.items) 
    const isLoading = useSelector(state => state.castsDetails.loading) 
    const history = useHistory()
    const previewVariants={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1
        },
        exit:{
            opacity:0
        }
    }
    return (
        <SkeletonTheme color="#202020" highlightColor="#444">
        <PersonsWrapper>
        <motion.div className="persons-container"
                variants={previewVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
        style={{
            backgroundImage: background && `url(${background})`
        }}>

            <>
            <div className="view">
                <div className="back" >
                    <div className="btn pointer" onClick={()=>history.goBack()}>
                      <button className="back-button pointer bold" >Back</button>
                    </div>  
                </div>
          
            <div className="person">
                {  isLoading ? <Skeleton width={300} height={400}/> :
                    <img src={`https://image.tmdb.org/t/p/w1280${castsDetails?.profile_path}`} alt="profile"/>
                }
                 
                <div className="person-info">
                    <h1>{isLoading? <Skeleton width={150}/> : castsDetails?.name}</h1>
                    {isLoading? <Skeleton width={150}/> :  <h2 className="bold biography">Biography</h2>} 
                    {isLoading ? <Skeleton count={4}/> : 
                    castsDetails?.biography === "" ? <p>No biography available.</p> :       
                    <h2>{truncateString(castsDetails?.biography,300)}</h2>    }
                    
                </div>
               
            </div>
            </div>
            </>
                      
        </motion.div>
        </PersonsWrapper>
        </SkeletonTheme>
    )
}

export default Persons