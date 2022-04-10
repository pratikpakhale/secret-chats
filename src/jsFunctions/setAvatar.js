import db from '../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

const setAvatar = async (uid, setPfpUrl) => {
  if (!uid) return

  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)

  const docRefImages = doc(db, 'templates', 'images')
  const docSnapImages = await getDoc(docRefImages)

  const data = docSnapImages.data()

  if (docSnap.exists()) {
    const pfpName = docSnap.data().pfpName

    if (pfpName) {
      if (data[pfpName]) {
        setPfpUrl(data[pfpName])
      }
    } else {
      if (data.owl) {
        setPfpUrl(data.owl)
      }
    }
  } else {
    // nothing
  }
}

export default setAvatar
