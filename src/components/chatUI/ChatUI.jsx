import React from 'react'

import Avatar from './Avatar'
import Messages from './Messages'
import InputGroup from './InputGroup'

function ChatUI({ userDetails }) {
  return (
    <div className='w-full xl:w-1/2 lg:w-4/6 md:w-5/6 mx-auto bg-base-200 h-5/6'>
      <Avatar pfpUrl='' username='Pratik' />
      <Messages />
      <InputGroup />
    </div>
  )
}

export default ChatUI
