import React, { useContext } from 'react'
import { authContext } from '../../store/AuthContext'

import NavbarAvatarActions from './NavbarAvatarActions'

function NavbarAvatar() {
  const { isLoggedIn, pfpUrl } = useContext(authContext)

  return (
    isLoggedIn && (
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img
                src={
                  pfpUrl ||
                  'https://img.icons8.com/flat-round/64/000000/owl.png'
                }
                alt='Avatar'
              />
            </div>
          </label>
          <NavbarAvatarActions />
        </div>
      </div>
    )
  )
}

export default NavbarAvatar
