import React from 'react'
import Button from './Button';
import DarkLightModeButton from './DarkLightModeButton';

function Header({showBackButton, backToPageHandler}) {
  
  return (
    <header className='header'>
      {showBackButton && <Button handler={backToPageHandler} /> }
      <DarkLightModeButton />
    </header>
  )
}

export default Header