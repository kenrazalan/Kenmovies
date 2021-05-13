import React from 'react'
import { CastsWrapper } from './style'

function Casts({casts}) {
    return (
        <CastsWrapper>
        <div className="casts-container">
            <div className="casts">
                 {casts?.slice(0,12).map(cast=> 
                 <div className="cast-container">
                 <img className="cast-img" src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.original_name} key={cast.id}/>
                 <p>{cast.name}</p>
                 <p className="character">{cast.character}</p>
                </div>
                )}
            </div>
           
        </div>
        </CastsWrapper>
    )
}

export default Casts
