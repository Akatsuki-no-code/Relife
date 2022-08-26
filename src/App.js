import logo from './logo.svg';
import './App.css';
import LRPage from './pages/account/lrPage';
import MainPage from './pages/mainPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LRPage/>}/>
        <Route path="/main-page" element={<MainPage/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
