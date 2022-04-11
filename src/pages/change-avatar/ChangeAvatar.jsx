import React, { useContext } from 'react'

import { authContext } from '../../store/AuthContext'

import Avatars from './Avatars'
import PageNotFound from '../404/PageNotFound'
import HomeBtn from '../../components/utils/HomeBtn'

function ChangeAvatar() {
  const { isLoggedIn } = useContext(authContext)

  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        {!isLoggedIn ? (
          <PageNotFound />
        ) : (
          <div className='max-w-md'>
            <h1 className='text-4xl font-bold font-ubuntu'>Pick an Avatar</h1>
            {isLoggedIn && <Avatars />}
            <HomeBtn />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChangeAvatar
