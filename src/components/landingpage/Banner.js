import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchNetflixOriginals} from '../../redux'

import styled from 'styled-components'

const BannerContainer  = styled.div`
    .banner-container{
        width:100%;
        height:460px;
        margin: 0 auto;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        position: relative;
    }
    .banner-container::before{
        content:'';
        position: absolute;
        width: 100%;
        height:50%;
        bottom: 0;
        z-index: 0;
        background-image: linear-gradient(360deg,#111,rgba(17, 17, 17, 0.8),transparent);
        left:0;
}
`

function Banner() {

    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
        setBanner(Math.floor(Math.random()* 19))
    },[])

    const [banner,setBanner] = useState()
    const netflixOriginals = useSelector(state => state.netflixOriginals.items) 
    console.log(netflixOriginals)
    const dispatch = useDispatch();
 
    return (
        <BannerContainer>
        <div className="banner-container"
        style={{
            backgroundImage:netflixOriginals.results && `url(https://image.tmdb.org/t/p/w1280/${netflixOriginals.results[banner]?.backdrop_path})`
        }} >
            <div>

            </div>
        </div>
        </BannerContainer>
    )
}

export default Banner
