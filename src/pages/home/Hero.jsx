import React from 'react'

import HeroActions from './HeroActions'

function Hero() {
  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold font-ubuntu'>:D</h1>
          <p className='py-6 font-poppins font-medium'>
            Secret Chats is a platform for you to chat with people anonymously!
            It's a device specific website so only this device can access chats
            of this device!
          </p>
          <HeroActions />
        </div>
      </div>
    </div>
  )
}

export default Hero
