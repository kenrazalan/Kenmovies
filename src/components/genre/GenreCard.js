import React from 'react'



function GenreCard({genreType,id}) {
    
    const genreName = genreType.split(' ')[0]
    console.log(genreType)
    return (
        <div className="genre pointer" >
            {genreType && 
                <div className="image-container">
                    <div className="imahe" style={{
                        background: `url(../${genreName}.jpg) 0% 0% / cover no-repeat`
                    }}>
                        <p>{genreType}</p>
                    </div>
                        
                        {/* <img 
                        src={`../${genreType}.jpg`} 
                        alt={genreType} key={id}/> */}

                 </div>}   
        </div>
    )
}

export default GenreCard
