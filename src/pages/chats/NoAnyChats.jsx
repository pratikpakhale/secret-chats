import React from 'react'
import HomeBtn from '../../components/utils/HomeBtn'

function NoAnyChats() {
  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-3xl font-bold font-ubuntu'>No Any Chats Yet</h1>
          <p className='py-6 font-poppins font-medium'>
            Looks like you don't have any messages for now, try sharing your
            link and also check message requests!
          </p>
          <HomeBtn />
        </div>
      </div>
    </div>
  )
}

export default NoAnyChats
