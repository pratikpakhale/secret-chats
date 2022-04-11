import React from 'react'

function SenderMessage({ message }) {
  return (
    <div className='alert alert-info shadow-sm w-4/6 lg:w-1/2 ml-5 mb-2 p-2'>
      <span className='text-white'>{message}</span>
    </div>
  )
}

export default SenderMessage
