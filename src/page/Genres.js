import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GenreList from '../components/genre/GenreList';
import {fetchGenres} from '../redux'

function Genres() {
    const dispatch = useDispatch();
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchGenres())
    },[dispatch])

    const genres = useSelector(state => state.genres.items) 
    const isLoading = useSelector(state => state.genres.loading)

    return (
        <div style={{marginTop:"100px"}}>
            <GenreList genres={genres.genres} title="Genres"/>
        </div>
    )
}

export default Genres
