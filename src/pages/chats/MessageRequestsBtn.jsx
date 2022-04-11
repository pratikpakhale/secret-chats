import React from 'react'

import { Link } from 'react-router-dom'

import { FaEnvelopeOpenText } from 'react-icons/fa'

function MessageRequestsBtn() {
  return (
    <div className='w-100 h-6 mx-auto flex items-center justify-center font-poppins py-6 bg-base-200'>
      <Link to='/message-requests'>
        <button className='btn btn-ghost text-lg'>
          <FaEnvelopeOpenText className='mx-5' />
          Message Requests
        </button>
      </Link>
    </div>
  )
}

export default MessageRequestsBtn
