import { useContext, useState, useEffect } from 'react'
import { authContext } from '../../store/AuthContext'

import { useParams, useNavigate } from 'react-router-dom'

import Unauthorized from './Unauthorized'
import Chat from './Chat'

import PageNotFound from '../404/PageNotFound'
import Loader from '../../components/utils/Loader'

import newMessageLogic from '../../jsFunctions/newMessageLogic'

function Message() {
  const { id } = useParams()
  const [isValidId, setIsValidId] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({})

  const { isLoggedIn, uid } = useContext(authContext)

  const navigate = useNavigate()

  useEffect(() => {
    newMessageLogic(id, setIsValidId, setIsLoading, setUserData, uid, navigate)
  }, [id, uid, navigate])

  return (
    <>
      {isLoggedIn && (
        <>
          {isLoading ? (
            <div className='hero h-5/6 bg-base-200'>
              <div className='hero-content text-center'>
                <div className='max-w-md'>
                  <Loader />
                </div>
              </div>
            </div>
          ) : (
            <>
              {!isValidId ? (
                <PageNotFound />
              ) : (
                <Chat
                  username={userData.username}
                  uid={userData.uid}
                  chatId={userData.chatId}
                />
              )}
            </>
          )}
        </>
      )}
      {!isLoggedIn && <Unauthorized />}
    </>
  )
}

export default Message
