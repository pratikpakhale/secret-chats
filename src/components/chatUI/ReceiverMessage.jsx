import React from 'react'

function ReceiverMessage({ message }) {
  return (
    <div className='float-right alert alert-success shadow-sm w-4/6 lg:w-1/2 mr-5 mb-2 p-2'>
      <span className='text-white'>{message}</span>
    </div>
  )
}

export default ReceiverMessage
