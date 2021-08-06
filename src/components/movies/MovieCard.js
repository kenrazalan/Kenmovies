import React, { useState } from 'react'
import { useHistory } from 'react-router';
import profile from '../../images/noimage.png'
import Skeleton from 'react-loading-skeleton'
import LazyLoad from 'react-lazyload';

function MovieCard({ movie, isLoading }) {
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const onLoad = () => {
        setLoaded(true);
      };

    return (
        <div className="movie pointer" onClick={() => history.push(`/preview/${movie?.id}/movie`)}>
            <div className="image-container">
                {!isLoading ?
                    <LazyLoad
                    debounce={false}
                    offset={500}
                    once >
                        <div style={{
                            background: movie.vote_average > 7 ? "#3bb33b" : "#aaa"
                        }} className="rating">{movie.vote_average}
                        </div>
                        <img
                            className={`${loaded ? 'img-loaded' : 'img-loading'}`}
                            onLoad={onLoad}
                            src={movie.poster_path === null ? profile : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.original_title} key={movie.id} />
                    </LazyLoad>
                    : <Skeleton height={326} />}
            </div>
            {!isLoading ?
                <>
                    <p className="title">{movie.original_title}</p>
                    <p className="release-date">{movie.release_date}</p>
                </>
                :
                <Skeleton width={170} count={2} />
            }

        </div>
    )
}

export default MovieCard
