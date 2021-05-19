import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/pagination/Pagination';
import Peoples from '../components/peoples/Peoples';
import {fetchPeople} from '../redux'

function People() {
    const dispatch = useDispatch();
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchPeople())
    },[dispatch])
    const handleChange =(page) =>{
        if (people?.page !== page) {
            dispatch(fetchPeople(page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }
    const people = useSelector(state => state.people.items) 
    const isLoading = useSelector(state => state.people.loading)
    const [currentPage,setCurrentPage] = useState(people?.page)
    return (
        <div style={{marginTop:"100px"}}>
        <Peoples results={people?.results} isLoading={isLoading} title="Peoples"/>
        <Pagination 
            activePage={people?.page}
            itemsCountPerPage={1}
            pageRangeDisplayed={10}
            totalItemsCount={people?.total_pages}
            totalPage={people?.total_pages}
            onChange={handleChange}
            />
        </div>
    )
}

export default People
