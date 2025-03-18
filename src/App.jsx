import { useState } from 'react'
import './Styles/main.css'
import Home from './Home'
import MainMenu from './pages/MainMenu'
import LoginScreen from './pages/LoginScreen'
import TechnicalDesign from './TechnicalDesign'
import {
  Routes,
  Route
} from "react-router-dom"
import Canvas from './pages/Canvas'

// for temp background
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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-design" element={<TechnicalDesign />} />
        <Route path='/main-menu' element={<MainMenu />} />
        <Route path='/login-screen' element={<LoginScreen />} />
        <Route path='/canvas' element={<Canvas level={3} />} />
        {/* <Route path='/canvas2' element={<Canvas level={1} />} />
        <Route path='/canvas3' element={<Canvas level={2} />} />
        <Route path='/canvas4' element={<Canvas level={3} />} /> */}
      </Routes>
    </>
  )
}

export default App
