import React, { useState, useContext, useEffect } from 'react'
import { authContext } from '../../store/AuthContext'

import HomeBtn from '../../components/utils/HomeBtn'
import PageNotFound from '../404/PageNotFound'
import InputName from './InputName'
import DisplayLink from './DisplayLink'

import getLink from '../../jsFunctions/getLink'

function Link() {
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')

  const { isLoggedIn, uid } = useContext(authContext)

  useEffect(() => {
    getLink(uid, setUrl, username)
  }, [uid, setUrl, username])

  return (
    <div className='hero h-5/6 bg-base-200 w-full'>
      <div className='hero-content text-center'>
        {!isLoggedIn ? (
          <PageNotFound />
        ) : (
          <div className='max-w-md'>
            {url ? (
              <DisplayLink url={url} />
            ) : (
              <InputName onSubmit={setUsername} />
            )}

            <HomeBtn />
          </div>
        )}
      </div>
    </div>
  )
}

export default Link
