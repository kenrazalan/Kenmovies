import React from 'react'
import { useHistory } from 'react-router';
import profile from '../../images/noimage.png'
import Skeleton from 'react-loading-skeleton'

function PeopleCard({people,isLoading}) {
    const history = useHistory();
    return (
        <div className="people pointer" onClick={()=>history.push(`/person/${people?.id}`)}>
        <div className="image-container">
            {!isLoading ? 
                <img 
                src={people?.profile_path === null? profile :`https://image.tmdb.org/t/p/w500/${people?.profile_path}`} 
                alt={people?.name} key={people?.id}/>
            : <Skeleton height={414} />}
        </div>
                {!isLoading ? <>
                         <p className="title bold">{people?.name}</p>
                         </>
                         :
                <Skeleton width={170}/>
                }
                
</div>
    )
}

export default PeopleCard
