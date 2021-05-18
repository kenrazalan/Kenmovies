import React from 'react'
import {UpcommingsWrapper} from './style'

import MovieCard from './MovieCard'

function Movies({results,title,isLoading}) {
    return (
        <UpcommingsWrapper>
       
        <div className="movies-container">
            <h1>{title}</h1>
            <div className="movies"> 
                {results?.slice(0,10).map(res=>{
                    return( 

                <MovieCard movie={res} isLoading={isLoading}/>)}
                )}
            </div>
        </div>
        </UpcommingsWrapper>

    )
}

export default Movies
