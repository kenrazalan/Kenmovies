import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSelectedGenre } from '../../redux';
import Movies from '../movies/Movies';
import Pagination from '../pagination/Pagination';

function SelectedGenre() {
    const dispatch = useDispatch();
    const {genresId,genreType} = useParams();
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchSelectedGenre(genresId))
    },[dispatch,genresId])
    const selectedGenre = useSelector(state => state.selectedGenre.items)
    const isLoading = useSelector(state => state.selectedGenre.loading)
    const [currentPage,setCurrentPage] = useState(selectedGenre?.page)
    const x = genreType.charAt(0).toUpperCase() + genreType.slice(1)
    console.log(selectedGenre)

        const handleChange =(page) =>{
        if (selectedGenre?.page !== page) {
            dispatch(fetchSelectedGenre(genresId,page));
            setCurrentPage(page)
            window.scrollTo(0,0)
          }
    }
    return (
        <div style={{marginTop:"100px"}}>
            <Movies results={selectedGenre?.results} isLoading={isLoading} title={x}/>
            <Pagination 
                activePage={selectedGenre?.page}
                itemsCountPerPage={1}
                pageRangeDisplayed={10}
                totalItemsCount={selectedGenre?.total_pages}
                totalPage={selectedGenre?.total_pages}
                onChange={handleChange}
                />
        </div>
    )
}

export default SelectedGenre
