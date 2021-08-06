import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Movies from '../components/movies/Movies'
import Pagination from '../components/pagination/Pagination';
import {fetchUpcomings} from '../redux'

function Upcoming() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUpcomings())
        window.scrollTo(0,0)
    },[dispatch])
    
    const upcomings = useSelector(state => state.upcomings.items) 
    const isLoading = useSelector(state => state.upcomings.loading)
    const [currentPage,setCurrentPage] = useState(upcomings?.page)
    console.log(upcomings)

    const handleChange =(page) =>{
        if (upcomings?.page !== page) {
            dispatch(fetchUpcomings(page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }
    return (
        <div style={{marginTop:"100px"}}>
            <Movies results={upcomings?.results} isLoading={isLoading} title="Upcoming Movies"/>
            <Pagination 
                activePage={upcomings?.page}
                itemsCountPerPage={1}
                pageRangeDisplayed={10}
                totalItemsCount={upcomings?.total_pages}
                totalPage={upcomings?.total_pages}
                onChange={handleChange}
                />
        </div>
    )
}

export default Upcoming
