import React from 'react'
import { Link } from 'react-router-dom'

function NavbarTitle() {
  return (
    <div className='flex-1'>
      <Link to='/'>
        <span className='normal-case text-2xl font-bold font-slant mx-5 md:mx-10 '>
          Secret Chats
        </span>
      </Link>
    </div>
  )
}

export default NavbarTitle
