import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../components/movies/Movies'
import Pagination from '../components/pagination/Pagination';
import {fetchTopRated} from '../redux'

const TopRated = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchTopRated())
    },[dispatch])
    const handleChange =(page) =>{
        if (topRated?.page !== page) {
            dispatch(fetchTopRated(page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }
    const topRated = useSelector(state => state.topRated.items) 
    const isLoading = useSelector(state => state.topRated.loading)
    const [currentPage,setCurrentPage] = useState(topRated?.page)
    return (
        <div style={{marginTop:"100px"}}>
        <Movies results={topRated?.results} isLoading={isLoading} title="Top Rated Movies"/>
        <Pagination 
            activePage={topRated?.page}
            itemsCountPerPage={1}
            pageRangeDisplayed={10}
            totalItemsCount={topRated?.total_pages}
            totalPage={topRated?.total_pages}
            onChange={handleChange}
            />
    </div>
    )
}

export default TopRated
