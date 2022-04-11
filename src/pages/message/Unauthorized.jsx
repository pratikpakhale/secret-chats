import React, { useState } from 'react'

import { FaArrowCircleRight } from 'react-icons/fa'
import auth from '../../firebase/auth'
import { signInAnonymously } from 'firebase/auth'

function Unauthorized() {
  const [isLoginBtnLoading, setIsLoginBtnLoading] = useState(false)

  const loginHandler = () => {
    setIsLoginBtnLoading(true)
    signInAnonymously(auth)
      .then(user => {
        setIsLoginBtnLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold font-ubuntu'>
            You are not Logged In
          </h1>
          <p className='py-6 font-poppins font-medium'>
            Login without any credentials to continue.. If you have already
            logged in, have patience while we auto detect. Although you can
            always create a new one with just a click without any credentials,
            totally anonymous!
          </p>
          <button
            className={`btn btn-primary font-ubuntu ${
              isLoginBtnLoading && 'loading'
            }`}
            onClick={loginHandler}
          >
            {!isLoginBtnLoading ? 'Login' : 'Logging In..'}
            {!isLoginBtnLoading && (
              <FaArrowCircleRight className='ml-2 text-lg' />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized
