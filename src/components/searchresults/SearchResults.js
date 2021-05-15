import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchSearch } from '../../redux'
import {SearchWrapper} from './style'

function SearchResults() {
    const dispatch = useDispatch();
    const {query} = useParams();
    const history = useHistory();

    useEffect(()=>{
        dispatch(fetchSearch(query))
    },[dispatch,query])
    const searchResults = useSelector(state => state.search.items)
    return (
        <SearchWrapper>
        {searchResults?.results &&  
        <div className="search-container">
        <h1 className="search-header">Search results for "{query}"</h1>
            <div className="search-results">
                
                { searchResults?.results.map(result=>{
                    return(
                        <Link to={`/preview/${result?.id}/movie`}>
                        <div className="result pointer">
                            <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} 
                            alt={result.original_title} key={result.id}/>
                            <p className="title bold">{result.original_title}</p>
                            <p className="release-date">{result.release_date}</p> 
                            
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
