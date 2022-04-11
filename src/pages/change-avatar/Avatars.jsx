import React, { useEffect, useState } from 'react'

import db from '../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

import Avatar from './Avatar'
import Loader from '../../components/utils/Loader'

const getAvatars = async (setAvatars, setIsLoading) => {
  const docRefImages = doc(db, 'templates', 'images')
  const docSnapImages = await getDoc(docRefImages)

  const data = docSnapImages.data()

  setAvatars(data)
  setIsLoading(false)

  return data
}

function Avatars() {
  const [avatars, setAvatars] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAvatars(setAvatars, setIsLoading)
  }, [])

  let names = []

  names = Object.keys(avatars)

  return (
    <>
      <div className='mt-5 pt-5 grid grid-cols-4 grid-rows-2 gap-7'>
        {names.map(name => (
          <Avatar key={name} name={name} url={avatars[name]} />
        ))}
      </div>
      {isLoading && <Loader />}
    </>
  )
}

export default Avatars
