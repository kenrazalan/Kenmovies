import {combineReducers} from 'redux'

import topRatedReducer from './topRated/topRatedReducer'
import netflixOriginalsReducer from './netflixOriginals/netflixOriginalsReducer'
import upcomingsReducer from './upcomings/upcomingReducer'
import previewDetailsReducer from './previewDetails/PreviewDetailsReducer'

const rootReducer = combineReducers({
    topRated : topRatedReducer,
    netflixOriginals: netflixOriginalsReducer,
    upcomings: upcomingsReducer,
    previewDetails: previewDetailsReducer
})

export default  rootReducer