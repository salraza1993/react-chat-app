import React from 'react'
import { Link } from 'react-router-dom'
import BodyBg from '../components/BodyBg'

function Home() {
  return (
    <div className='home__wrapper'>
      <BodyBg />
      <div className="content__container">
        <div className="content">
          <p>Welcome to</p>
          <h1>Chatmate</h1>
          <small>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cum commodi nostrum praesentium alias inventore dolorum ipsam, deleniti perspiciatis minus dignissimos... 
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

export default Home