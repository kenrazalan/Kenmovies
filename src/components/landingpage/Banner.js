import React, { useEffect,useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchNetflixOriginals} from '../../redux'
import {truncateString} from './truncateString'
import {BannerContainer} from './style'



function Banner() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
        setBanner(Math.floor(Math.random()* 19))
    },[dispatch])
    const history = useHistory();
    const [banner,setBanner] = useState()
    const netflixOriginals = useSelector(state => state.netflixOriginals.items) 
    console.log(netflixOriginals)
    
 
    return (
        <BannerContainer>
        <div className="banner-container"
        style={{
            backgroundImage:netflixOriginals?.results && `url(https://image.tmdb.org/t/p/w1280/${netflixOriginals.results[banner]?.backdrop_path})`
        }} >
            {netflixOriginals.results &&
            <>
            <div className="banner">
                <div className="banner-info">
                <div className="title-rating">
                        <h1>{netflixOriginals?.results[banner]?.name || netflixOriginals?.results[banner]?.title}</h1>
                        <span className="rating"><span className="icon-star">★ </span> 
                        {netflixOriginals?.results[banner]?.vote_average} Rating</span>
                </div>
                <button onClick={()=>history.push(`preview/${netflixOriginals.results[banner].id}/tv`)}>View</button>
                <h2>{truncateString(netflixOriginals.results[banner]?.overview,160)}</h2>
                </div>
                <img src={`https://image.tmdb.org/t/p/w1280/${netflixOriginals.results[banner]?.poster_path}`} alt="test"/>
            </div>
           
            </>
            }          
        </div>
        </BannerContainer>
    )
}

export default Banner
