import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// views
import Signin from './views/Signin'
import Signup from './views/Signup'
import Home from './views/Home'
import Header from './components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
// require('dotenv').config()

// Styles
import './assets/scss/style.scss'

function App() {
  const [showBackButton, setShowBackButton] = useState(true);
  const currentLocation = useLocation();
  const navigate = useNavigate();
  
  function getHomeLocation() {
    if (currentLocation.pathname === '/')
      setShowBackButton(false)
    else
      setShowBackButton(true)
  }
  const backToPageHandler = () => { 
    navigate(-1) 
    getHomeLocation()
  }

  useEffect(() => {
    getHomeLocation()
    return getHomeLocation();
  }, [currentLocation])

  return (
    <>
      <Header showBackButton={showBackButton} backToPageHandler={backToPageHandler} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Signin /> } />
        <Route path='/register' element={ <Signup /> } />
      </Routes>
    </>
  )
}

export default App
