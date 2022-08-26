import logo from './logo.svg';
import './App.css';
import LRPage from './pages/account/lrPage';
import MainPage from './pages/mainPage';
import AboutUs from './pages/aboutus/aboutus.js';
import PQuiz from './pages/quiz/personalityQuiz';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import $ from 'jquery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LRPage/>}/>
        <Route path="/main-page" element={<MainPage/>}>
          <Route path="aboutus" element={<AboutUs/>}/>

        </Route>
        <Route path="/main-page" element={<MainPage/>}/>
        <Route path="/quiz" element={<PQuiz/>}/>
      </Routes>
    </Router>
  );
}

export default App;
