import React from 'react'
import { Link } from 'react-router-dom'
import BodyBg from '../components/BodyBg'

function Signin() {
  return (
    <div className='home__wrapper'>
      <BodyBg />
      <div className="content__container">
        <div className="content">
          <p>Welcome back to <strong>Chatmate</strong></p>
          <h4 className='bungee text--primary'>Access Your Account</h4>
          <small className="display--block">
            Don't have an account? &nbsp; <Link to="/register">Register Now</Link>
          </small>
          <hr />
          <div className="form__container mt--4">
            <div className="form__block col--6">
              <label className="form__block__label" htmlFor="">
                Email <sup><i className="fa-solid fa-star-of-life"></i></sup>
              </label>
              <input type="email" className="form__block__input" placeholder="Enter Email" name="" id="" />
            </div>
            <div className="form__block col--6">
              <label className="form__block__label" htmlFor="">
                Password <sup><i className="fa-solid fa-star-of-life"></i></sup>
              </label>
              <input type="password" className="form__block__input" placeholder="Enter Password" name="" id="" />
            </div>
            <button className="button button--primary button--large mt--4">
             <i className="fa-solid fa-user"></i> Access My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin