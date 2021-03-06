import {combineReducers} from 'redux'

import topRatedReducer from './topRated/topRatedReducer'
import netflixOriginalsReducer from './netflixOriginals/netflixOriginalsReducer'
import upcomingsReducer from './upcomings/upcomingReducer'
import previewDetailsReducer from './previewDetails/PreviewDetailsReducer'
import castsReducer from './casts/castsReducer'
import castsDetailsReducer from './castsDetails/castsDetailsReducer'
import searchReducer from './search/searchReducer'
import similarMoviesReducer from './similarMovies/similarMoviesReducer'
import knownForReducer from './knownFor/knownForReducer'
import trendingReducer from './trending/TrendingReducer'
import peopleReducer from './people/PeopleReducer'
import popularReducer from './popular/PopularReducer'
import genresReducer from './genres/GenresReducer'
import selectedGenreReducer from './selectedGenre/selectedGenreReducer'

const rootReducer = combineReducers({
    topRated : topRatedReducer,
    netflixOriginals: netflixOriginalsReducer,
    upcomings: upcomingsReducer,
    previewDetails: previewDetailsReducer,
    casts: castsReducer,
    castsDetails: castsDetailsReducer,
    search: searchReducer,
    similarMovies: similarMoviesReducer,
    knownFor: knownForReducer,
    trending: trendingReducer,
    people: peopleReducer,
    popular: popularReducer,
    genres: genresReducer,
    selectedGenre: selectedGenreReducer
})

export default  rootReducer