import React, { useEffect, useRef } from 'react'

import SenderMessage from './SenderMessage'
import ReceiverMessage from './ReceiverMessage'

function Messages() {
  const messagesConatiner = useRef()

  useEffect(() => {
    messagesConatiner.current.scrollTop = messagesConatiner.current.scrollHeight
  }, [])

  return (
    <div
      ref={messagesConatiner}
      className='scroll-auto h-5/6 overflow-y-auto pb-5'
    >
      {/* render conditionally */}
    </div>
  )
}

export default Messages
