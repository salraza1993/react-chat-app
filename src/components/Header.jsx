import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import DarkLightModeButton from './DarkLightModeButton';

function Header() {
  const [showBack, setShowBack] = useState(true);
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const headerElement = useRef(null)
  const backToPageHandler = () => {
    navigate(-1)
    console.log(currentLocation);
    if(currentLocation.pathname === '/') setShowBack(false)
    else setShowBack(true)
  }
  useEffect(() => {
    if(currentLocation.pathname === '/') setShowBack(false)
    else setShowBack(true)
  }, [])
  
  return (
    <header className='header' ref={headerElement}>
      {showBack && <Button handler={backToPageHandler} /> }
      <DarkLightModeButton />
    </header>
  )
}

export default Header