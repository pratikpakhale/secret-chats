import db from '../firebase/firestore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { uniqueNamesGenerator, names } from 'unique-names-generator'

const config = {
  dictionaries: [names],
}

const newMessageLogic = async (
  id,
  setIsValidId,
  setIsLoading,
  setUserData,
  loggedInUserUid,
  navigate
) => {
  if (!id || !loggedInUserUid) return

  const docRef = doc(db, 'links', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()

    if (!data.uid) {
      setIsValidId(false)
      setIsLoading(false)
      return
    }

    const loggedInUserDocRef = doc(db, 'users', loggedInUserUid)
    const loggedInUserDocSnap = await getDoc(loggedInUserDocRef)

    if (!loggedInUserDocSnap.exists()) return

    const loggedInUserData = loggedInUserDocSnap.data()

    let prevChats = {}
    if (loggedInUserData.chats) prevChats = loggedInUserData.chats

    if (prevChats[data.uid]) {
      navigate('/chat/' + prevChats[data.uid])
      return
    }

    const chatId = Date.now().toString()

    const newChatDocRef = doc(db, 'chats', chatId)

    const characterName = uniqueNamesGenerator(config)
    await setDoc(
      newChatDocRef,
      {
        [loggedInUserUid]: characterName,
        [data.uid]: data.username,
        chats: {
          [loggedInUserUid]: [],
          [data.uid]: [],
        },
      },
      {
        merge: true,
      }
    )

    prevChats = {
      ...prevChats,
      [data.uid]: chatId,
    }

    await setDoc(loggedInUserDocRef, { chats: prevChats }, { merge: true })

    setUserData({
      username: data.username,
      uid: data.uid,
      chatId,
    })
    setIsValidId(true)
    navigate('/chat/' + prevChats[data.uid])
  } else {
    setIsValidId(false)
  }
  setIsLoading(false)
}

export default newMessageLogic
