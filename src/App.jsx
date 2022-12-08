import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// views
import Signin from './views/Signin'
import Signup from './views/Signup'
import Home from './views/Home'

// Styles
import './assets/scss/style.scss'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Signin /> } />
        <Route path='/register' element={ <Signup /> } />
      </Routes>
    </>
  )
}

export default App
