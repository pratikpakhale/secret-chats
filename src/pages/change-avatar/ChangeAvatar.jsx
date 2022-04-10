import React, { useContext } from 'react'

import { Navigate, Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa'

import { authContext } from '../../store/AuthContext'

import Avatars from './Avatars'

function ChangeAvatar() {
  const { isLoggedIn } = useContext(authContext)

  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-4xl font-bold font-ubuntu'>
            {isLoggedIn ? 'Pick an Avatar' : <Navigate to='/' />}
          </h1>
          {isLoggedIn && <Avatars />}
          <Link to='/'>
            <button className={`btn btn-primary font-ubuntu mt-10`}>
              <FaArrowCircleLeft className='mr-2 text-lg' />
              Goto Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChangeAvatar
