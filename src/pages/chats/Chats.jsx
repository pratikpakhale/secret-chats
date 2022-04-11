import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../store/AuthContext'

import PageNotFound from '../404/PageNotFound'
import MessageRequestsBtn from './MessageRequestsBtn'
import AllChats from './AllChats'
import NoAnyChats from './NoAnyChats'

import db from '../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

const getChats = async (uid, setChatsIds) => {
  if (!uid || uid.length === 0) return

  const docRef = doc(db, 'users', uid)
  const docSnapshot = await getDoc(docRef)

  if (!docSnapshot.exists()) return

  const data = docSnapshot.data()

  if (!data.chats || data.chats.length === 0) return

  setChatsIds(data.chats)
}

function Chats() {
  const { isLoggedIn, uid } = useContext(authContext)
  const [chatsIds, setChatsIds] = useState([])

  useEffect(() => {
    getChats(uid, setChatsIds)
  }, [uid])

  return (
    <>
      {!isLoggedIn && <PageNotFound />}
      {isLoggedIn && (
        <>
          <MessageRequestsBtn />
          {!chatsIds.length ? <NoAnyChats /> : <AllChats />}
        </>
      )}
    </>
  )
}

export default Chats
