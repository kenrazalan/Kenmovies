import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchCasts, fetchPreviewDetails } from '../../redux';
import PeopleCard from '../peoples/PeopleCard';
import { PeopleWrapper } from '../peoples/style'
import styled from 'styled-components'
import Back from '../back/Back';

const AllCastsWrapper  = styled.div`
    .allcasts-container{
    }
    h1{
        font-size: 1.3rem;
    }
    .total,h1{
        text-align: center;
    }

`

function AllCasts() {
    const history = useHistory()
    const dispatch = useDispatch();
    const {type,id} = useParams()

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(fetchCasts(type,id)) 
        dispatch(fetchPreviewDetails(type,id)) 
        }, [dispatch,type,id])
        const casts = useSelector(state => state.casts.items) 
        const previewDetails = useSelector(state => state.previewDetails.items) 
        console.log(previewDetails)
    return (
        <PeopleWrapper>
        <AllCastsWrapper>
        <div className="allcasts-container">
        <Back/>
        <div className="peoples-container">
        <h1>All Casts</h1>
        <p className="total">{`${casts.cast?.length?.toLocaleString()} total number of casts for ${previewDetails?.original_title}`}</p>
        <div className="peoples"> 
                {casts.cast?.map(res=>{
                    return( 
                <PeopleCard people={res}/>
                )}
                )}
        </div>
        </div>
        </div>
        </AllCastsWrapper>
        </PeopleWrapper>
    )
}

export default AllCasts
