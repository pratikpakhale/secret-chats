import React, { useContext, useState } from 'react'
import { authContext } from '../../store/AuthContext'
import { FaArrowCircleRight, FaEnvelope, FaShare } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import auth from '../../firebase/auth'
import { signInAnonymously } from 'firebase/auth'

function HeroActions() {
  const { isLoggedIn } = useContext(authContext)
  const [isLoginBtnLoading, setIsLoginBtnLoading] = useState(false)

  const loginHandler = () => {
    setIsLoginBtnLoading(true)

    signInAnonymously(auth)
      .then(user => {
        setIsLoginBtnLoading(false)
        // console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      {!isLoggedIn && (
        <button
          className={`btn btn-primary font-ubuntu ${
            isLoginBtnLoading && 'loading'
          }`}
          onClick={loginHandler}
        >
          {!isLoginBtnLoading ? 'Login For Free' : 'Logging In..'}
          {!isLoginBtnLoading && (
            <FaArrowCircleRight className='ml-2 text-lg' />
          )}
        </button>
      )}
      {isLoggedIn && (
        <>
          <Link to='/chat'>
            <button className='btn btn-secondary font-ubuntu'>
              Check DMs
              <FaEnvelope className='ml-2 text-lg' />
            </button>
          </Link>

          <Link to='/link'>
            <button className='btn btn-ghost ml-5 mt-5 lg:mt-0 md:mt-0'>
              Share Your Link
              <FaShare className='ml-2 text-lg' />
            </button>
          </Link>
        </>
      )}
    </>
  )
}

export default HeroActions
