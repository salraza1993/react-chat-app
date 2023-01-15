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
          <h4 className='bungee text--primary'>Create an Account</h4>
          <small className="display--block">
            Already have an account? &nbsp; <Link to="/login">Login</Link>
          </small>
          <hr />
          <div className="form__container mt--4">
            <div className="form__block col--6">
              <label className="form__block__label" htmlFor="">
                First Name <sup><i className="fa-solid fa-star-of-life"></i></sup>
              </label>
              <input type="text" className="form__block__input" placeholder="Enter First Name" name="" id="" />
            </div>
            <div className="form__block col--6">
              <label className="form__block__label" htmlFor="">
                Last Name <sup><i className="fa-solid fa-star-of-life"></i></sup>
              </label>
              <input type="text" className="form__block__input" placeholder="Enter Last Name" name="" id="" />
            </div>
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
            <div className="form__block col--12 form__block--file">
              <label className="form__block__label" htmlFor="">
                Upload Picture
              </label>
              <input type="file" className="form__block__input" placeholder="Enter Password" name="" id="" />
            </div>
            <button className="button button--primary button--large mt--4">
             <i className="fa-solid fa-user-plus"></i> Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup