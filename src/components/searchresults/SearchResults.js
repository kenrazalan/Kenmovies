import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchSearch } from '../../redux'
import {SearchWrapper} from './style'
import photo from '../../images/nophoto.png'

function SearchResults() {
    const dispatch = useDispatch();
    const {query} = useParams();

    useEffect(()=>{
        dispatch(fetchSearch(query))
    },[dispatch,query])
    const searchResults = useSelector(state => state.search.items)
    const isLoading = useSelector(state => state.search.loading)
    console.log(isLoading)
    return (
        <SearchWrapper>
        {searchResults?.results &&  
        <div className="search-container">
        <h1 className="search-header">Search results for "{query}"</h1>
            <div className="search-results">
                
                { searchResults.results.map(result=>{
                    return(
                        <Link to={`/preview/${result?.id}/movie`}>
                        <div className="result pointer">
                            {!isLoading? <img 
                            src={result.poster_path === null ? photo : `https://image.tmdb.org/t/p/w500/${result.poster_path}`} 
                            alt={result.original_title} key={result.id}/> 
                            : <Skeleton width={180} height={270}/>}
                            
                            <p className="title bold">{!isLoading ? result.original_title 
                                : <Skeleton/>}</p>
                            <p className="release-date">{!isLoading ? result.release_date 
                                : <Skeleton/>}</p> 
                            
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>}
        </SearchWrapper>
    )
}

export default SearchResults
