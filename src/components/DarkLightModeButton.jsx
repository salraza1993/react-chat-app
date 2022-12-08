import React from 'react'

function DarkLightModeButton() {
  return (
    <div className='dark__light__mode__button'>
      <i className="fa-solid fa-sun"></i>
    </div>
  )
}

export default React.memo(DarkLightModeButton)