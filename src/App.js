import './App.css';
import {Provider} from 'react-redux'
import Banner from './components/landingpage/Banner';
import Navbar from './components/navbar/Navbar';
import store from './redux/store'
import WebFont from 'webfontloader';
import LandingPage from './components/landingpage/LandingPage';

WebFont.load({
  google: {
    families: ['Yantramanav: 400, 700']
  }
});

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Navbar/>
        <LandingPage/>
        </Provider>
    </div>
  );
}

export default App;
