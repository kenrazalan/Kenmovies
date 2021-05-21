import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSelectedGenre } from '../../redux';
import Movies from '../movies/Movies';

function SelectedGenre() {
    const dispatch = useDispatch();
    const {genresId,genreType} = useParams();
    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(fetchSelectedGenre(genresId))
    },[dispatch,genresId])
    const selectedGenre = useSelector(state => state.selectedGenre.items)
    const isLoading = useSelector(state => state.selectedGenre.loading)
    const x = genreType.charAt(0).toUpperCase() + genreType.slice(1)
    console.log(selectedGenre)
    return (
        <div style={{marginTop:"100px"}}>
            <Movies results={selectedGenre?.results} isLoading={isLoading} title={x}/>
        </div>
    )
}

export default SelectedGenre
