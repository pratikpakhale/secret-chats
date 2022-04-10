import React, { useContext } from 'react'

import { authContext } from '../../store/AuthContext'

import db from '../../firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'

function Avatar({ name, url }) {
  const { setPfpUrl, uid } = useContext(authContext)

  const avatarClickHandler = async e => {
    const docRef = doc(db, 'users', uid)
    await setDoc(
      docRef,
      {
        pfpName: e.target.alt,
      },
      {
        merge: true,
      }
    )
    setPfpUrl(e.target.src)
  }

  return (
    <div className='avatar'>
      <div className='w-12 mask mask-squircle cursor-pointer hover:scale-110'>
        <img src={url} alt={name} onClick={avatarClickHandler} />
      </div>
    </div>
  )
}

export default Avatar
