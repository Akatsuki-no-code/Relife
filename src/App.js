import logo from './logo.svg';
import './App.css';
import LRPage from './pages/account/lrPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LRPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
