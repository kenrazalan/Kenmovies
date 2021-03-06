import React from 'react'
import {UpcommingsWrapper} from './style'

import MovieCard from './MovieCard'

function Movies({results,title,isLoading}) {
    return (
        <UpcommingsWrapper>
       
        <div className="movies-container">
            <h3>{title}</h3>
            <div className="movies"> 
                {results?.map(res=>{
                    return( 

                <MovieCard movie={res} isLoading={isLoading}/>)}
                )}
            </div>
        </div>
        </UpcommingsWrapper>

    )
}

export default Movies
