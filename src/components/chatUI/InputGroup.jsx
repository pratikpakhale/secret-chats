import React from 'react'

import { FaArrowRight } from 'react-icons/fa'

function InputGroup() {
  return (
    <>
      <div className='input-group  px-5 py-2 w-full md:w-5/6 lg:w-4/6 absolute bottom-0'>
        <input
          type='text'
          placeholder='Message'
          className='input input-bordered w-full block'
        />
        <button className='btn btn-square'>
          <FaArrowRight />
        </button>
      </div>
    </>
  )
}

export default InputGroup
