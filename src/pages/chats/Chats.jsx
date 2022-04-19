import { useContext, useEffect, useState } from 'react'
import { authContext } from '../../store/AuthContext'

import PageNotFound from '../404/PageNotFound'
import AllChats from './AllChats'
import NoAnyChats from './NoAnyChats'
import Loader from '../../components/utils/Loader'

import db from '../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

import getNames from './functions/getAllNames'
import getAllLastMessages from './functions/getLastMessages'

const getChats = async (uid, setChats, setIsLoading) => {
  if (!uid || uid.length === 0) return

  const docRef = doc(db, 'users', uid)
  const docSnapshot = await getDoc(docRef)

  if (!docSnapshot.exists()) {
    setIsLoading(false)
    return
  }
  const data = docSnapshot.data()

  if (!data.chats) {
    setIsLoading(false)
    return
  }

  const chatUIDs = Object.keys(data.chats)

  const names = await getNames(chatUIDs, uid)

  const lastMessages = await getAllLastMessages(uid)

  let temp = []
  chatUIDs.forEach(chatUID => {
    temp = [
      ...temp,
      {
        name: names[chatUID],
        id: data.chats[chatUID],
        message: lastMessages[data.chats[chatUID]],
      },
    ]
  })

  setChats(temp)

  setIsLoading(false)
  return
}

function Chats() {
  const { isLoggedIn, uid } = useContext(authContext)
  const [chats, setChats] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getChats(uid, setChats, setIsLoading)
  }, [uid])

  return (
    <>
      {!isLoggedIn && <PageNotFound />}
      {isLoggedIn && (
        <>
          {isLoading && (
            <div className='hero h-5/6 bg-base-200'>
              <div className='hero-content text-center'>
                <div className='max-w-md'>
                  <Loader />
                </div>
              </div>
            </div>
          )}
          {!isLoading && (
            <>
              {chats.length === 0 ? <NoAnyChats /> : <AllChats chats={chats} />}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Chats
