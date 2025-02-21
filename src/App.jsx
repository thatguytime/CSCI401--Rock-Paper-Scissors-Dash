import { useState } from 'react'
import './App.css'
import './temp.css'
import Home from './Home'
import TechnicalDesign from './TechnicalDesign'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical-design" element={<TechnicalDesign />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
