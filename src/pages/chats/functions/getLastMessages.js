import db from '../../../firebase/firestore'
import { collection, query, where, getDocs } from 'firebase/firestore'

const getAllLastMessages = async loggedInUserUid => {
  const q = query(
    collection(db, 'chats'),
    where(loggedInUserUid, '!=', 'anything literally')
  )

  const querySnapshot = await getDocs(q)
  let lastMessages = {}
  querySnapshot.forEach(doc => {
    if (doc.data().chats) {
      let lastMsgTimestamp = 0

      const chatsInfo = doc.data().chats

      const chatUIDs = Object.keys(chatsInfo)

      chatUIDs.forEach(uid => {
        const userChatTimestamps = Object.keys(chatsInfo[uid]).sort()
        const lastTimestamp = userChatTimestamps[userChatTimestamps.length - 1]

        if (lastTimestamp >= lastMsgTimestamp) {
          lastMsgTimestamp = lastTimestamp
          lastMessages = {
            ...lastMessages,
            [doc.id]: chatsInfo[uid][lastTimestamp],
          }
        }
      })
    }
  })

  return lastMessages
}

export default getAllLastMessages
