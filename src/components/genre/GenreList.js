import React from 'react'
import GenreCard from './GenreCard'
import { GenreWrapper } from './style'


function GenreList({title,genres}) {
    
    return (
        <GenreWrapper>
            <div className="genres-container">
            <h3>{title}</h3>
            <div className="genres">
                {genres?.map(genre => {
                    return(
                       <GenreCard genreType={genre.name} id={genre.id}/>
                    )
                })}
            </div>
            </div>
        </GenreWrapper>
    )
}

export default GenreList
