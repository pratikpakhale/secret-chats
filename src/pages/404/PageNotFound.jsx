import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='hero h-5/6 bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold font-ubuntu'>Oops! Error404</h1>
          <p className='py-6 font-poppins font-medium'>
            The page you're looking for is not available.
          </p>
          <Link to='/'>
            <button className={`btn btn-primary font-ubuntu `}>
              <FaArrowCircleLeft className='mr-2 text-lg' />
              Goto Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
