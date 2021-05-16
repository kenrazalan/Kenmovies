import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {fetchPreviewDetails,fetchCasts, fetchCastsDetails, fetchSimilarMovies} from '../../redux'
import { truncateString } from '../landingpage/truncateString';
import Casts from './casts/Casts';
import { PreviewWrapper } from './style';
import {motion} from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import photo from '../../images/noimage.png'
import Movies from '../movies/Movies'

function Preview() {
    const history = useHistory()
    const dispatch = useDispatch();
    const {type,id} = useParams()

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(fetchPreviewDetails(type,id))
        dispatch(fetchCasts(type,id))  
        dispatch(fetchSimilarMovies(type,id))  
        }, [dispatch,type,id])

    const previewDetails = useSelector(state => state.previewDetails.items) 
    const isLoading = useSelector(state => state.previewDetails.loading)
    const similarMovies = useSelector(state => state.similarMovies.items) 
    const casts = useSelector(state => state.casts.items) 

    const lastIndex = previewDetails?.genres.length-1;
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
                       
            <>
            <div className="view">
            <div className="back">
                    <div className="btn pointer" onClick={()=>history.goBack()}>
                      <button className="back-button pointer bold" >Back</button>
                    </div>  
                </div>
          
            <div className="preview-banner">
                 {!isLoading && previewDetails?
                     <img 
                     src={previewDetails.poster_path === null ? photo :`https://image.tmdb.org/t/p/w1280${previewDetails?.poster_path}`} alt="poster"/>
            
            : <Skeleton width={300} height={400}/>
                 }
                 
                <div className="preview-banner-info">
                   
                        <h1>{!isLoading && previewDetails? previewDetails?.original_title || previewDetails?.name   :
                         <Skeleton width={150} />}</h1>
                                  
                    <div className="rating-genres-container">
                    { !isLoading && previewDetails?  <span className="rating">
                                   <span className="icon-star">★ </span> 
                                   {previewDetails?.vote_average} Rating
                                   </span> : 
                                   <Skeleton width={150}/>}
                      <div className="genres">
                        {!isLoading && previewDetails?
                        previewDetails?.genres.map((genre,i) =>                       
                            <span>{genre.name} {lastIndex !== i && <span> / </span>} </span> 
                        ) : <Skeleton width={150}/> }
                      </div>
                    </div>
                    <h1 className="overview"> {!isLoading ? "Overview" : <Skeleton width={150}/>}</h1> 
                      { !isLoading && previewDetails?          
                    <h2>
                      {  truncateString(previewDetails?.overview,1100)}
                    </h2>  : <Skeleton count={3} width={300}/>}
                </div>
               
            </div>
            </div>
            </>
                         
        </motion.div>
        </PreviewWrapper>              
        <Casts casts={casts?.cast}/>
        <Movies results={similarMovies?.results} title="Similar Movies"/>
        </>
    )
}

export default Preview
