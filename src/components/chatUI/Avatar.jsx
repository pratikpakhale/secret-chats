import React from 'react'

function Avatar({ pfpUrl, username }) {
  return (
    <div className='flex justify-center mt-2 items-center mb-2'>
      <div className='px-4 pt-1 pb-2 border-2 border-base-300 rounded-2xl flex justify-center items-center'>
        <div className='avatar'>
          <div className='w-12 mt-2 rounded-full mx-3'>
            <img src={pfpUrl} alt='avatar' />
          </div>
        </div>
        <div className='font-poppins text-xl'>{username}</div>
      </div>
    </div>
  )
}

export default Avatar
