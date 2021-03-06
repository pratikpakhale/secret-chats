import React from 'react'

import HomeBtn from '../../components/utils/HomeBtn'

function PageNotFound() {
  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold font-ubuntu'>Oops! Error 404</h1>
          <p className='py-6 font-poppins font-medium'>
            The page you're looking for is not available.
          </p>
          <HomeBtn />
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
