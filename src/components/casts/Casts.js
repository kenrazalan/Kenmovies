import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { CastsWrapper } from './style'
import profile from '../../images/noimage.png'
import Button from '../button/Button'
import LazyLoad from 'react-lazyload';

function Casts({casts,movieId}) {
    const [loaded, setLoaded] = useState(false);
    const onLoad = () => {
        setLoaded(true);
      };
    return (
        <CastsWrapper>
        <div className="casts-container">
        <h1 className="title">Top Billed Casts</h1>
        {casts?.length === 0 ? <h1 style={{textAlign: "center",marginTop:"90px"}}>No casts found</h1> : 
            <div className="casts">
                 {casts?.slice(0,12).map(cast=> 
                <Link to={`/person/${cast?.id}`} key={cast?.id}> 
                    <div className="cast-container">
                        <LazyLoad
                        debounce={false}
                        offset={100}
                        once >
                            <img 
                            className={`${loaded ? 'img-loaded' : 'img-loading'}`}
                            onLoad={onLoad}
                            src={cast.profile_path === null? profile :`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} 
                            alt={cast.original_name} key={cast.id}/>
                        </LazyLoad>
                    </div>
                    <p>{cast.name}</p>
                    <p className="character">{cast.character}</p>
                    
                </Link> 
                )}
            </div>}
            {casts?.length >= 12 && <Button link={`preview/${movieId}/movie/allcasts`} text="View All Casts"/>}
            
        </div>
        </CastsWrapper>
    )
}

export default Casts
