import React from 'react'
import {Link} from 'react-router-dom'


function GenreCard({genreType,id}) {
    const genreLink = genreType.toLowerCase().replace(/\s+/g, '-')
    const genreName = genreType.split(' ')[0]
    console.log(genreLink)
    return (
        <div className="genre pointer" >
            {genreType && 
                <div className="image-container">
                    <Link to={`/genres/${genreLink}/${id}`}>
                    <div className="imahe" style={{
                        background: `url(../${genreName}.png) 0% 0% / cover no-repeat`
                    }}>
                        <p>{genreType}</p>
                    </div>
                    </Link>
                        
                        {/* <img 
                        src={`../${genreType}.jpg`} 
                        alt={genreType} key={id}/> */}

                 </div>}   
        </div>
    )
}

export default GenreCard
