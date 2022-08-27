import './App.css';
import LRPage from './pages/account/lrPage';
import MainPage from './pages/mainPage';
import AboutUs from './pages/aboutus/aboutus.js';
import PQuiz from './pages/quiz/personalityQuiz';
import { BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import ExconvictInfo from './pages/exconvicts/exconvict';
import { useState,useLayoutEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
function App() {

  const nav = useNavigate()

  useLayoutEffect(()=>{
    onAuthStateChanged(auth,user =>{
      if(user){
        nav("/main-page/aboutus")
      }
      else{
        nav("/login")
      }
    })
  },[auth.currentUser])

  return (
    
      <Routes>
        <Route path="/login" element={<LRPage/>}/>
        <Route path="/main-page" element={<MainPage/>}>
          <Route path="aboutus" element={<AboutUs/>}/>
          <Route path="exconvicts" element={<ExconvictInfo/>}/>

        </Route>
        <Route path="/main-page" element={<MainPage/>}/>
        <Route path="/quiz" element={<PQuiz/>}/>
      </Routes>
  );
}

export default App;
