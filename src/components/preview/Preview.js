import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {fetchPreviewDetails} from '../../redux'
import { truncateString } from '../landingpage/truncateString';
import { PreviewWrapper } from './style';

function Preview() {
    const history = useHistory()
    const dispatch = useDispatch();
    const {type,id} = useParams()
    useEffect(() => {
        dispatch(fetchPreviewDetails(type,id))

    }, [dispatch,type,id])
    const previewDetails = useSelector(state => state.previewDetails.items) 
    const lastIndex = previewDetails?.genres.length-1
    console.log(previewDetails)
    return (
        <PreviewWrapper>
        <div className="preview-container"
        style={{
            backgroundImage:previewDetails && `url(https://image.tmdb.org/t/p/w1280/${previewDetails?.backdrop_path})`
        }} >
                
            {previewDetails &&
            <>
            <div className="view">
                <div className="back">
                      <button onClick={()=>history.goBack()}>Back</button>
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
                    <h2 className="overview">Overview</h2>           
                    <h2>{truncateString(previewDetails?.overview,160)}</h2>
                </div>
               
            </div>
            </div>
            </>
            }
          
        </div>
        </PreviewWrapper>
    )
}

export default Preview
