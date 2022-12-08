import React from 'react'
import { Link } from 'react-router-dom'
import BodyBg from '../components/BodyBg'

function Signup() {
  return (
    <div className='home__wrapper'>
      <BodyBg />
      <div className="content__container">
        <div className="content">
          <p>Welcome to <strong>Chatmate</strong></p>
          <h3 className='bungee text--primary'>Create an Account</h3>
          <small>
            Already have an account?
          </small>
          <br />
          <br />
          <div className="button__wrapper">
            <Link to='/register' className='button button--primary'>
              <i className="fa-solid fa-user-plus"></i>
              Sign Up
            </Link>
            <Link to='/login' className='button button--light-outline'>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup