import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../store/AuthContext'

import { useParams } from 'react-router-dom'

import Loader from '../../components/utils/Loader'
import PageNotFound from '../404/PageNotFound'
import ChatUI from '../../components/chatUI/ChatUI'

import validateID from './functions/validateID'

function ChatInterface() {
  const { isLoggedIn, uid } = useContext(authContext)
  const { id } = useParams()

  const [isValidId, setIsValidId] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    validateID(uid, id, setIsValidId, setIsLoading, setUserDetails)
  }, [uid, id])

  return (
    <>
      {!isLoggedIn && <PageNotFound />}
      {isLoggedIn && (
        <>
          {isLoading && (
            <>
              <div className='hero h-5/6 bg-base-200'>
                <div className='hero-content text-center'>
                  <div className='max-w-md'>
                    <Loader />
                  </div>
                </div>
              </div>
            </>
          )}
          {!isLoading && (
            <>
              {isValidId && <ChatUI userDetails={userDetails} />}
              {!isValidId && <PageNotFound />}
            </>
          )}
        </>
      )}
    </>
  )
}

export default ChatInterface
