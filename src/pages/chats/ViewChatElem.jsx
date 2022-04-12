import React from 'react'

import { Link } from 'react-router-dom'

function ViewChatElem({ name, chatID }) {
  return (
    <div className='w-full lg:w-5/6 lg:px-10 mg:px-5 mx-auto grid grid-cols-2 lg:justify-center md:justify-center sm:justify-between items-center rounded-xl border-b-2 border-base-500 py-2'>
      <div>{name}</div>
      <div>
        <Link to={`/chat/${chatID}`}>
          <button className='btn btn-ghost'>View Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default ViewChatElem
