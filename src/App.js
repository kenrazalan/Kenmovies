import './App.css';
import {Provider} from 'react-redux'
import Banner from './components/landingpage/Banner';
import Navbar from './components/navbar/Navbar';
import store from './redux/store'

function App() {
  return (
    <div className="App">
        <Provider store={store}>
        <Navbar/>
        <Banner/>
        </Provider>
    </div>
  );
}

export default App;
