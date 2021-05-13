import React from 'react'
import { useHistory } from 'react-router'
import {Link} from 'react-router-dom'
import { CastsWrapper } from './style'

function Casts({casts}) {
    const history = useHistory();
    return (
        <CastsWrapper>
        <div className="casts-container">
        <h1 className="title">Top Billed Casts</h1>
        
            <div className="casts">
                 {casts?.slice(0,12).map(cast=> 
                <Link to={`/person/${cast?.id}`} > 
                 <div className="cast-container">
                 <img className="cast-img" src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.original_name} key={cast.id}/>
                 <p>{cast.name}</p>
                 <p className="character">{cast.character}</p>
                </div>
                </Link> 
                )}
            </div>
        
        </div>
        </CastsWrapper>
    )
}

export default Casts
