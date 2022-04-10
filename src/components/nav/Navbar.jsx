import React, { useContext } from 'react'
import { authContext } from '../../store/AuthContext'

import NavbarTitle from './NavbarTitle'
import NavbarAvatar from './NavbarAvatar'

function Navbar() {
  const { isLoggedIn } = useContext(authContext)

  return (
    <div className='navbar bg-base-200 drop-shadow rounded-box'>
      <NavbarTitle />
      {isLoggedIn && <NavbarAvatar />}
    </div>
  )
}

export default Navbar
