import db from '../firebase/firestore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const setLink = async (uid, id, username) => {
  await setDoc(doc(db, 'links', id), { uid, username }, { merge: true })
}

const getLink = async (uid, setUrl, username) => {
  if (!uid || uid.length === 0) return

  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return

  const data = docSnap.data()
  if (!data.link || data.link.length === 0) {
    if (!username || username.length === 0) return

    const id = Date.now()
    setLink(uid, id.toString(), username)
    setDoc(docRef, { link: id, username }, { merge: true })
    setUrl(id)
  } else {
    setUrl(data.link)
  }
}

export default getLink
