import React from 'react'
import { useHistory } from 'react-router';
import profile from '../../images/noimage.png'
import Skeleton from 'react-loading-skeleton'

function MovieCard({movie,isLoading}) {
    const history = useHistory();
    return (
        <div className="movie pointer" onClick={()=>history.push(`/preview/${movie?.id}/movie`)}>
                <div className="image-container">
                    {!isLoading ? 
                    <div>
                        <div style={{
                            background: movie.vote_average > 7 ? "#3bb33b" : "#aaa"
                        }} className="rating">{movie.vote_average}
                        </div>
                        <img 
                        src={movie.poster_path === null? profile :`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.original_title} key={movie.id}/>
                    </div>
                    : <Skeleton height={326}/>}
                </div>
                        {!isLoading ? <>
                                 <p className="title bold">{movie.original_title}</p>
                                 <p className="release-date">{movie.release_date}</p> 
                                 </>
                                 :
                        <Skeleton width={170} count={2}/>
                        }
                        
                </div>
    )
}

export default MovieCard
