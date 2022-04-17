import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function HomeBtn() {
  const navigate = useNavigate()
  const goHomeHandler = () => {
    navigate('/')
  }

  return (
    <button
      className={`btn btn-primary font-ubuntu my-10`}
      onClick={goHomeHandler}
    >
      <FaArrowCircleLeft className='mr-2 text-lg' />
      Goto Home
    </button>
  )
}

export default HomeBtn
