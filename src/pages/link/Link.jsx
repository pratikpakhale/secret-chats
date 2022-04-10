import React, { useState, useContext, useEffect } from 'react'
import { authContext } from '../../store/AuthContext'

import db from '../../firebase/firestore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import PageNotFound from '../404/PageNotFound'

const setLink = async (uid, id) => {
  await setDoc(doc(db, 'links', id), { uid }, { merge: true })
}

const getLink = async (uid, setUrl) => {
  if (!uid) return

  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return

  const data = docSnap.data()
  if (!data.link || data.link.length === 0) {
    const id = Date.now()
    setLink(uid, id.toString())
    setDoc(docRef, { link: id }, { merge: true })
    setUrl(id)
  } else {
    setUrl(data.link)
  }
}

function Link() {
  const [url, setUrl] = useState('')
  const [tooltip, setTooltip] = useState('copy')

  const { isLoggedIn, uid } = useContext(authContext)

  useEffect(() => {
    getLink(uid, setUrl)
  }, [uid, setUrl])

  const onInputClickHandler = e => {
    navigator.clipboard.writeText(e.target.value)
    setTooltip('copied')
  }

  return (
    <div className='hero h-5/6 bg-base-200 w-full'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          {isLoggedIn && (
            <h1 className='text-3xl font-bold font-ubuntu'>
              Share this link to start getting Anonymous Messages!
            </h1>
          )}
          {isLoggedIn && url ? (
            <div className='tooltip mt-10 w-full' data-tip={tooltip}>
              <input
                type='text'
                placeholder=''
                className='input input-bordered w-4/6 input-md'
                value={`${window.location.href.replace(
                  'link',
                  'message'
                )}/${url}`}
                onClick={onInputClickHandler}
                readOnly
              />
            </div>
          ) : (
            'Loading..'
          )}

          {!isLoggedIn && <PageNotFound />}
        </div>
      </div>
    </div>
  )
}

export default Link
