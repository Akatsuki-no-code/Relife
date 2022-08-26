import logo from './logo.svg';
import './App.css';
import LRPage from './pages/account/lrPage';
import MainPage from './pages/mainPage';
import AboutUs from './pages/aboutus/aboutus.js';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LRPage/>}/>
        <Route path="/main-page" element={<MainPage/>}>
          <Route path="aboutus" element={<AboutUs/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
