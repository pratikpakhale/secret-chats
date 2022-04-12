import db from '../../../firebase/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore'

const getNames = async (chatUIDs, loggedInUserUid) => {
  const q = query(
    collection(db, 'chats'),
    where(loggedInUserUid, '!=', 'anything literally')
  )

  let names = []

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(doc => {
    chatUIDs.forEach(chatUID => {
      if (doc.data()[chatUID])
        names = {
          ...names,

          [chatUID]: doc.data()[chatUID],
        }
    })
  })
  return names
}

export default getNames
