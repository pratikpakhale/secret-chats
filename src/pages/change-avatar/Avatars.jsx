import React, { useEffect, useState } from 'react'

import db from '../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

import Avatar from './Avatar'

const getAvatars = async setAvatars => {
  const docRefImages = doc(db, 'templates', 'images')
  const docSnapImages = await getDoc(docRefImages)

  const data = docSnapImages.data()

  setAvatars(data)

  return data
}

function Avatars() {
  const [avatars, setAvatars] = useState({})

  useEffect(() => {
    getAvatars(setAvatars)
  }, [])

  let names = []

  names = Object.keys(avatars)

  return (
    <div className='mt-5 pt-5 grid grid-cols-4 grid-rows-2 gap-7'>
      {names.map(name => (
        <Avatar key={name} name={name} url={avatars[name]} />
      ))}
    </div>
  )
}

export default Avatars
