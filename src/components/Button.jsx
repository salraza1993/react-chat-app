import React from 'react'

function Button({handler}) {
  return <button type='button' className="button button--light-outline" onClick={handler}>
    <i className="fa-solid fa-long-arrow-left"></i>
    Back
  </button>
}

export default Button