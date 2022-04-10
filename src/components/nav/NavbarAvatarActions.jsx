import React from 'react'
import { Link } from 'react-router-dom'

import logoutHandler from './handlers/logoutHandler'

function NavbarAvatarActions() {
  return (
    <ul
      tabIndex='0'
      className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
    >
      <li>
        <Link to='/change-avatar'>
          <button className='text-red'>Change Profile Photo</button>
        </Link>
      </li>
      <li>
        <button className='text-error' onClick={logoutHandler}>
          Delete Account
        </button>
      </li>
    </ul>
  )
}

export default NavbarAvatarActions
