import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../components/movies/Movies'
import Pagination from '../components/pagination/Pagination';
import {fetchTrending} from '../redux'

function Trending() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchTrending())
    },[dispatch])
    
    const handleChange =(page) =>{
        if (trending?.page !== page) {
            dispatch(fetchTrending(page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }

    const trending = useSelector(state => state.trending.items) 
    const isLoading = useSelector(state => state.trending.loading)
    const [currentPage,setCurrentPage] = useState(trending?.page)

    return (
        <div style={{marginTop:"100px"}}>
            <Movies results={trending?.results} isLoading={isLoading} title="Trending Movies"/>
            <Pagination 
                activePage={trending?.page}
                itemsCountPerPage={1}
                pageRangeDisplayed={10}
                totalItemsCount={trending?.total_pages}
                totalPage={trending?.total_pages}
                onChange={handleChange}
                />
        </div>
    )
}

export default Trending
