import React from 'react'

import HomeBtn from '../../components/utils/HomeBtn'

import ViewChatElem from './ViewChatElem'

function AllChats({ chats }) {
  chats.sort((a, b) => {
    return b.id - a.id
  })

  return (
    <>
      <div className='my-10 px-10 w-full mx-auto text-center flex flex-col font-poppins bg-base-200'>
        {chats.map(chat => {
          return (
            <ViewChatElem
              key={chat.id}
              name={chat.name}
              chatID={chat.id}
              message={chat.message}
            />
          )
        })}

        <div className='w-full mx-auto '>
          <HomeBtn />
        </div>
      </div>
    </>
  )
}

export default AllChats
