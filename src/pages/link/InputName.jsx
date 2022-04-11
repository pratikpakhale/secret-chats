import React, { useRef } from 'react'

import { FaArrowRight } from 'react-icons/fa'

function InputName({ onSubmit }) {
  const inputRef = useRef()

  const submitHandler = e => {
    const username = inputRef.current.value.trim()

    if (username.length < 4 || username.length > 20) return

    onSubmit(username)
  }

  return (
    <>
      <h1 className='text-3xl font-bold font-ubuntu'>
        What would you like to be called? 👀
      </h1>
      <div className='input-group mx-auto w-full mt-10 block'>
        <input
          type='text'
          placeholder='Alias'
          className='input input-bordered w-4/6'
          ref={inputRef}
        />
        <button className='btn btn-square' onClick={submitHandler}>
          <FaArrowRight />
        </button>
      </div>
    </>
  )
}

export default InputName
