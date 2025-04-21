import { useState } from 'react'
import './Styles/main.css'
import Home from './Home'
import MainMenu from './pages/MainMenu'
import LoginScreen from './pages/LoginScreen'
import TechnicalDesign from './TechnicalDesign'
import CharacterScreen from './pages/CharacterScreen'
import VerificationEmailPage from './pages/VerificationEmailPage'
import {
  Routes,
  Route
} from "react-router-dom"
import Canvas from './pages/Canvas'
import Register from './pages/Register'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'

// for temp background
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

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
      <Toaster position='bottom-right' toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-design" element={<TechnicalDesign />} />
        <Route path='/main-menu' element={<MainMenu />} />
        <Route path='/login-screen' element={<LoginScreen />} />
        <Route path='/canvas' element={<Canvas level={0} />} />
        <Route path='/CharacterScreen' element={<CharacterScreen />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/verify-email' element={<VerificationEmailPage />} />
      </Routes>
    </>
  )
}

export default App
