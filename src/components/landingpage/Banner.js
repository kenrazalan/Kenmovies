import React, { useEffect,useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchNetflixOriginals} from '../../redux'
import {truncateString} from './truncateString'
import {BannerContainer} from './style'
import Skeleton from 'react-loading-skeleton'



function Banner() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
        setBanner(Math.floor(Math.random()* 19))
    },[dispatch])
    const history = useHistory();
    const [banner,setBanner] = useState()
    const netflixOriginals = useSelector(state => state.netflixOriginals.items) 
    const isLoading = useSelector(state => state.netflixOriginals.loading)

 
    return (
        <BannerContainer>
        <div className="banner-container"
        style={{
            backgroundImage:netflixOriginals?.results && `url(https://image.tmdb.org/t/p/w1280/${netflixOriginals.results[banner]?.backdrop_path})`
        }} >
            {netflixOriginals.results &&
            <>
            <div className="banner">

            {!isLoading ? <img src={`https://image.tmdb.org/t/p/w1280/${netflixOriginals.results[banner]?.poster_path}`} alt="test"/> 
                : <Skeleton width={300} height={400}/>}

                <div className="banner-info">
               
                    {!isLoading ? <h1>{netflixOriginals?.results[banner]?.name || netflixOriginals?.results[banner]?.title}</h1>
                    : <Skeleton height={30}/>}
                    {!isLoading ? <span className="rating"><span className="icon-star">★ </span> 
                        {netflixOriginals?.results[banner]?.vote_average} Rating</span> 
                    :<Skeleton width={120} /> }   
                
                {!isLoading ? <button onClick={()=>history.push(`preview/${netflixOriginals.results[banner].id}/movie`)}>View</button>
                :<Skeleton width={70} height={30}/>}
                {!isLoading ? <h2>{truncateString(netflixOriginals.results[banner]?.overview, 300 )}</h2>
                : <Skeleton count={3} width={300}/>}
                
                </div>

                
            </div>
           
            </>
            }          
        </div>
        </BannerContainer>
    )
}

export default Banner
