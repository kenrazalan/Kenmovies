import {combineReducers} from 'redux'

import topRatedReducer from './topRated/topRatedReducer'
import netflixOriginalsReducer from './netflixOriginals/netflixOriginalsReducer'

const rootReducer = combineReducers({
    topRated : topRatedReducer,
    netflixOriginals: netflixOriginalsReducer
})

export default  rootReducer