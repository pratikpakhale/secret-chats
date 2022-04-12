/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useContext } from 'react'
import { authContext } from '../../store/AuthContext'

import SenderMessage from './SenderMessage'
import ReceiverMessage from './ReceiverMessage'

function Messages({ chats, otherPersonUid }) {
  const messagesConatiner = useRef()
  const { uid } = useContext(authContext)

  useEffect(() => {
    messagesConatiner.current.scrollTop = messagesConatiner.current.scrollHeight
  }, [chats])

  const timestamps = Object.keys(chats[uid]).concat(
    Object.keys(chats[otherPersonUid])
  )
  timestamps.sort()

  return (
    <div
      ref={messagesConatiner}
      className='scroll-auto h-5/6 overflow-y-auto pb-5'
    >
      {chats && (
        <>
          {timestamps.map(timestamp => {
            if (chats[uid][timestamp]) {
              return (
                <ReceiverMessage
                  key={timestamp}
                  message={chats[uid][timestamp]}
                />
              )
            }
            if (chats[otherPersonUid][timestamp]) {
              return (
                <SenderMessage
                  key={timestamp}
                  message={chats[otherPersonUid][timestamp]}
                />
              )
            }
          })}
        </>
      )}
    </div>
  )
}

export default Messages
