import React, { useState, useEffect, useContext } from 'react'
import { authContext } from '../../store/AuthContext'

import db from '../../firebase/firestore'
import { doc, onSnapshot } from 'firebase/firestore'

import getPfpUrl from '../../jsFunctions/getPfpUrl'

import Avatar from './Avatar'
import Messages from './Messages'
import InputGroup from './InputGroup'

function ChatUI({ userDetails, id }) {
  const { uid } = useContext(authContext)

  const chatKeys = Object.keys(userDetails)

  let otherPersonUid

  chatKeys.forEach(key => {
    if (key !== uid && key !== 'chats') otherPersonUid = key
  })

  const [pfpUrl, setPfpUrl] = useState(
    'https://img.icons8.com/flat-round/64/000000/owl.png'
  )

  const [chatDetails, setChatsDetails] = useState()
  const [chats, setChats] = useState()

  useEffect(() => {
    getPfpUrl(otherPersonUid, setPfpUrl)
  }, [otherPersonUid])

  useEffect(() => {
    const docRef = doc(db, 'chats', id)
    onSnapshot(docRef, doc => {
      if (doc.exists()) {
        setChatsDetails(doc.data())
        setChats(doc.data().chats)
      }
    })
  }, [id, uid, otherPersonUid])

  return (
    <div className='w-full xl:w-1/2 lg:w-4/6 md:w-5/6 mx-auto bg-base-200 h-5/6'>
      {chatDetails && (
        <Avatar pfpUrl={pfpUrl} username={chatDetails[otherPersonUid]} />
      )}
      {chatDetails && (
        <Messages chats={chats} otherPersonUid={otherPersonUid} />
      )}
      {chatDetails && (
        <InputGroup id={id} chats={chats} otherPersonUid={otherPersonUid} />
      )}
    </div>
  )
}

export default ChatUI
