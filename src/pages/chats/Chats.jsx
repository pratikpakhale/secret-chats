import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../store/AuthContext'

import PageNotFound from '../404/PageNotFound'
import AllChats from './AllChats'
import NoAnyChats from './NoAnyChats'

import db from '../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

import getNames from './functions/getAllNames'

const getChats = async (uid, setChats) => {
  if (!uid || uid.length === 0) return

  const docRef = doc(db, 'users', uid)
  const docSnapshot = await getDoc(docRef)

  if (!docSnapshot.exists()) return

  const data = docSnapshot.data()

  if (!data.chats) return

  const chatUIDs = Object.keys(data.chats)

  const names = await getNames(chatUIDs, uid)

  setChats([])
  chatUIDs.forEach((chatUID, index) => {
    setChats(prevChats => {
      return [
        ...prevChats,
        {
          name: names[chatUID],
          id: data.chats[chatUID],
        },
      ]
    })
  })
}

function Chats() {
  const { isLoggedIn, uid } = useContext(authContext)
  const [chats, setChats] = useState([])

  useEffect(() => {
    getChats(uid, setChats)
  }, [uid])

  return (
    <>
      {!isLoggedIn && <PageNotFound />}
      {isLoggedIn && (
        <>{chats.length === 0 ? <NoAnyChats /> : <AllChats chats={chats} />}</>
      )}
    </>
  )
}

export default Chats
