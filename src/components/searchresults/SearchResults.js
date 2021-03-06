import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchSearch } from '../../redux'
import {SearchWrapper} from './style'
import photo from '../../images/noimage.png'
import Pagination from '../pagination/Pagination'
import LazyLoad from 'react-lazyload'

function SearchResults() {
    const dispatch = useDispatch();
    const {query} = useParams();

    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchSearch(query))
    },[dispatch,query])
    const searchResults = useSelector(state => state.search.items)
    const isLoading = useSelector(state => state.search.loading)
    const [currentPage,setCurrentPage] = useState(searchResults?.page)
    const [loaded, setLoaded] = useState(false);
    const onLoad = () => {
        setLoaded(true);
      };

    const handleChange =(page) =>{
        if (searchResults?.page !== page) {
            dispatch(fetchSearch(query,page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }
    console.log( searchResults.results?.length)
    return (
        <SearchWrapper>
        {searchResults?.results &&  
        <div className="search-container">
       {searchResults && searchResults?.results.length !== 0 ?   
       <>
        <h1 className="search-header"> {`Search results`  } </h1>
        <p className="total">{`${searchResults.total_results.toLocaleString()} total results for "${query}"`}</p>
       </>  
        : <h1 className="search-header">{`No result found for "${query}"`}</h1> } 

            <div className="search-results">
                
                { searchResults.results.map(result=>{
                    return(
                        <Link to={`/preview/${result?.id}/movie`}>
                        <div className="result pointer">
                            <div className="image-container">
                                {!isLoading? 
                                <LazyLoad
                                    debounce={false}
                                    offset={500}
                                    once
                                     >                      
                                    <img 
                                    className={`${loaded ? 'img-loaded' : 'img-loading'}`}
                                    onLoad={onLoad}                              
                                    src={result.poster_path === null ? photo : `https://image.tmdb.org/t/p/w500/${result.poster_path}`} 
                                    alt={result.original_title} key={result.id}/> 
                                </LazyLoad>
                                : <Skeleton height={286}/> }
                            </div>
                            <p className="title bold">{!isLoading ? result.original_title 
                                : <Skeleton/>}</p>
                            <p className="release-date">{!isLoading ? result.release_date 
                                : <Skeleton/>}</p> 
                            
                        </div>
                        </Link>
                    )
                })}

            </div>
            {searchResults.results.length >10 &&
            <Pagination 
            activePage={searchResults?.page}
            itemsCountPerPage={1}
            pageRangeDisplayed={10}
            totalItemsCount={searchResults?.total_pages}
            totalPage={searchResults?.total_pages}
            onChange={handleChange}
            />}
        </div>
        
        }
        </SearchWrapper>
    )
}

export default SearchResults
