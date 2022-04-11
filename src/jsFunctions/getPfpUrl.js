import db from '../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

const getPfpUrl = async (uid, setPfpUrl) => {
  if (!uid || uid.length === 0) return

  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return

  let pfpName

  if (docSnap.data().pfpName) pfpName = docSnap.data().pfpName

  const imgDocRef = doc(db, 'templates', 'images')
  const imgDocSnap = await getDoc(imgDocRef)

  if (!imgDocSnap.exists()) return

  if (imgDocSnap.data()[pfpName]) setPfpUrl(imgDocSnap.data()[pfpName])
}

export default getPfpUrl
