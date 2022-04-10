import React, { useContext } from 'react'
import { authContext } from '../../store/AuthContext'

import NavbarAvatarActions from './NavbarAvatarActions'

function NavbarAvatar() {
  const { pfpUrl } = useContext(authContext)

  return (
    <div className='flex-none gap-2'>
      <div className='dropdown dropdown-end'>
        <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
          <div className='w-10 rounded-full'>
            {pfpUrl && <img src={pfpUrl} alt='Avatar' />}
          </div>
        </label>
        <NavbarAvatarActions />
      </div>
    </div>
  )
}

export default NavbarAvatar
