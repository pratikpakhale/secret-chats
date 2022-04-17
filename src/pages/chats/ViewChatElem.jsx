import React from 'react'

import { Link } from 'react-router-dom'

function ViewChatElem({ name, chatID, message }) {
  return (
    <Link to={`/chat/${chatID}`}>
      <div className='rounded-xl border-2 border-base-500 py-2 my-2 w-full lg:w-5/6 px-3 lg:px-10 md:px-5 mx-auto flex flex-col justify-center items-start cursor-pointer shadow-sm'>
        <div className='font-poppins text-xl font-bold'>{name}</div>
        <div className='font-poppins text-lg'>{message}</div>
      </div>
    </Link>
  )
}

export default ViewChatElem
