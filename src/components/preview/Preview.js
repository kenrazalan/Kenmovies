import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {fetchPreviewDetails,fetchCasts, fetchCastsDetails} from '../../redux'
import { truncateString } from '../landingpage/truncateString';
import Casts from './casts/Casts';
import { PreviewWrapper } from './style';
import {motion} from 'framer-motion'

function Preview() {
    const history = useHistory()
    const dispatch = useDispatch();
    const {type,id} = useParams()
    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(fetchPreviewDetails(type,id))
        dispatch(fetchCasts(type,id))
        dispatch(fetchCastsDetails())

        
    }, [dispatch,type,id])
    const previewDetails = useSelector(state => state.previewDetails.items) 
    const casts = useSelector(state => state.casts.items) 
    const lastIndex = previewDetails?.genres.length-1
    
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
        <>
        <PreviewWrapper>
        <motion.div className="preview-container"
                variants={previewVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
        style={{
            backgroundImage:previewDetails && `url(https://image.tmdb.org/t/p/w1280/${previewDetails?.backdrop_path})`
        }} >
                
            {previewDetails &&
            <>
            <div className="view">
            <div className="back">
                    <div className="btn pointer" onClick={()=>history.goBack()}>
                      <button className="back-button pointer bold" >Back</button>
                    </div>  
                </div>
          
            <div className="preview-banner">
            
                 <img src={`https://image.tmdb.org/t/p/w1280${previewDetails.poster_path}`} alt="poster"/>
                <div className="preview-banner-info">
                    <h1>{previewDetails?.name}</h1>
                    <div className="rating-genres-container">
                    <span className="rating"><span className="icon-star">★ </span> 
                    {previewDetails?.vote_average} Rating</span>
                      <div className="genres">
                        {previewDetails?.genres.map((genre,i) =>                       
                            <span>{genre.name} {lastIndex !== i && <span> / </span>} </span> 
                        )}
                      </div>
                    </div>
                    <h1 className="overview">Overview</h1>           
                    <h2>{truncateString(previewDetails?.overview,160)}</h2>
                </div>
               
            </div>
            </div>
            </>
            }          
        </motion.div>
        </PreviewWrapper>
        <Casts casts={casts?.cast}/>
        </>
    )
}

export default Preview
