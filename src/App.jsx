import { useState } from 'react'
import './App.css'
import './temp.css'
import './Styles/main.css'
import Home from './Home'
import MainMenu from './pages/MainMenu'
import TechnicalDesign from './TechnicalDesign'
import {
  Routes,
  Route
} from "react-router-dom"

// for temp backgroun
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const location = useLocation();

  // This is temp. Will eventually just set body {background-color: #202020;}
  useEffect(() => {
    if (location.pathname === '/main-menu') {
      document.body.style.backgroundColor = '#202020';
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [location]);
  //

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-design" element={<TechnicalDesign />} />
        <Route path='/main-menu' element={<MainMenu />} />
      </Routes>
    </>
  )
}

export default App
