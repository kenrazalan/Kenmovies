import './App.css';
import {Provider} from 'react-redux'
import Navbar from './components/navbar/Navbar';
import store from './redux/store'
import WebFont from 'webfontloader';

import { Route, Switch } from 'react-router';
import Preview from './components/preview/Preview';
import { BrowserRouter } from 'react-router-dom';
import Persons from './components/persons/Persons';
import {AnimatePresence} from 'framer-motion'
import SearchResults from './components/searchresults/SearchResults';
import { SkeletonTheme } from 'react-loading-skeleton';
import Footer from './components/footer/Footer';
import Upcoming from './page/Upcoming';
import Trending from './page/Trending';
import TopRated from './page/TopRated';
import People from './page/People';
import Popular from './page/Popular';
import Genres from './page/Genres';
import SelectedGenre from './components/selectedgenre/SelectedGenre';
import LandingPage from './page/LandingPage';
require('dotenv').config()

WebFont.load({
  google: {
    families: ['Yantramanav: 400, 700']
  }
});

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <BrowserRouter>        
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
        <SkeletonTheme color="#202020" highlightColor="#444">
        <Switch>
          <div className="main-container">
              <Route exact path="/">
                <LandingPage/>
              </Route>
              <Route exact path="/preview/:id/:type">
                <Preview/>
              </Route>
              <Route exact path="/person/:id">
                <Persons/>
              </Route>
              <Route exact path="/search/:query">
                <SearchResults />
              </Route>
              <Route exact path="/upcoming">
                <Upcoming />
              </Route>
              <Route exact path="/trending">
                <Trending />
              </Route>
              <Route exact path="/toprated">
                <TopRated />
              </Route>
              <Route exact path="/people">
                <People />
              </Route>
              <Route exact path="/popular">
                <Popular />
              </Route>
              <Route exact path="/genres">
                <Genres />
              </Route>
              <Route exact path="/genres/:genreType/:genresId">
                  <SelectedGenre/>
              </Route>
          </div>
        </Switch>
        </SkeletonTheme>
        </AnimatePresence>
    
        </BrowserRouter>
        </Provider>
        <Footer/>
    </div>
  );
}

export default App;
