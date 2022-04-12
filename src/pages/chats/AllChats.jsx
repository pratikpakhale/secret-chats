import React from 'react'

import HomeBtn from '../../components/utils/HomeBtn'

import ViewChatElem from './ViewChatElem'

function AllChats({ chats }) {
  return (
    <>
      <div className='my-10 px-10 w-full mx-auto text-center flex flex-col font-poppins'>
        <div className='w-full lg:w-5/6 lg:px-10 mg:px-5 mx-auto grid grid-cols-2 lg:justify-center md:justify-center sm:justify-between items-center rounded-xl border-b-2 border-base-500 py-2 text-xl'>
          <div className='font-bold '>Aliases [Random]</div>
          <div className='font-bold'>Chat Button</div>
        </div>
        {chats.map(chat => {
          return (
            <ViewChatElem key={chat.id} name={chat.name} chatID={chat.id} />
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
