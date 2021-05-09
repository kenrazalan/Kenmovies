import React from 'react'
import {UpcommingsWrapper} from './style'

function Movies({results,title}) {
    console.log(results?.results)
    return (
        <UpcommingsWrapper>
       
        {results?.results &&  
         
        <div movies-container>
            <h1>{title}</h1>
            <div className="movies"> 
                {results.results.slice(0,10).map(res=>
                <>
                    <div className="pointer">
                      <div className="image-container">
                        <div style={{
                            background: res.vote_average > 7 ? "#3bb33b" : "#aaa"
                        }} className="rating">{res.vote_average}</div>
                        <img src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} 
                        alt={res.original_title} key={res.id}/>
                     </div>
                        <p className="title bold">{res.original_title}</p>
                        <p className="release-date">{res.release_date}</p> 
                    </div>
                </>
                )}
            </div>
        </div>}
        </UpcommingsWrapper>

    )
}

export default Movies
