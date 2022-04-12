import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../store/AuthContext'

import PageNotFound from '../404/PageNotFound'
import AllChats from './AllChats'
import NoAnyChats from './NoAnyChats'

import db from '../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

const getChats = async (uid, setChats) => {
  if (!uid || uid.length === 0) return

  const docRef = doc(db, 'users', uid)
  const docSnapshot = await getDoc(docRef)

  if (!docSnapshot.exists()) return

  const data = docSnapshot.data()

  if (!data.chats) return

  setChats(data.chats)
}

function Chats() {
  const { isLoggedIn, uid } = useContext(authContext)
  const [chats, setChats] = useState()

  useEffect(() => {
    getChats(uid, setChats)
  }, [uid])

  return (
    <>
      {!isLoggedIn && <PageNotFound />}
      {isLoggedIn && (
        <>{!chats ? <NoAnyChats /> : <AllChats chats={chats} />}</>
      )}
    </>
  )
}

export default Chats
