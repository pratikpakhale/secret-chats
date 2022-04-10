import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'

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
        </div>
      </div>
    </div>
  )
}

export default ChangeAvatar
