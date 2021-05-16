import React from 'react'
import { useHistory } from 'react-router'
import {UpcommingsWrapper} from './style'
import profile from '../../images/noimage.png'

function Movies({results,title}) {
    const history = useHistory();
    return (
        <UpcommingsWrapper>
       
        {results &&  
         
        <div className="movies-container">
            <h1>{title}</h1>
            <div className="movies"> 
                {results?.slice(0,10).map(res=>{
                    return( 
                <>
                    <div className="movie pointer" onClick={()=>history.push(`/preview/${res?.id}/movie`)}>
                      <div className="image-container">
                        <div style={{
                            background: res.vote_average > 7 ? "#3bb33b" : "#aaa"
                        }} className="rating">{res.vote_average}</div>
                        <img 
                        src={res.poster_path === null? profile :`https://image.tmdb.org/t/p/w500/${res.poster_path}`} 
                        alt={res.original_title} key={res.id}/>
                     </div>
                        <p className="title bold">{res.original_title}</p>
                        <p className="release-date">{res.release_date}</p> 
                    </div>
                </>)}
                )}
            </div>
        </div>}
        </UpcommingsWrapper>

    )
}

export default Movies
