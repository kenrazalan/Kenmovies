import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../components/movies/Movies'
import Pagination from '../components/pagination/Pagination';
import {fetchPopular} from '../redux'

function Popular() {

    const dispatch = useDispatch();
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchPopular())
    },[dispatch])

    const handleChange =(page) =>{
        if (popular?.page !== page) {
            dispatch(fetchPopular(page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }
    const popular = useSelector(state => state.popular.items) 
    const isLoading = useSelector(state => state.popular.loading)
    const [currentPage,setCurrentPage] = useState(popular?.page)

    return (
        <div style={{marginTop:"100px"}}>
        <Movies results={popular?.results} isLoading={isLoading} title="Popular Movies"/>
        <Pagination 
            activePage={popular?.page}
            itemsCountPerPage={1}
            pageRangeDisplayed={10}
            totalItemsCount={popular?.total_pages}
            totalPage={popular?.total_pages}
            onChange={handleChange}
            />
    </div>
    )
}

export default Popular
