import db from '../../../firebase/firestore'
import { doc, getDoc } from 'firebase/firestore'

const validateID = async (
  uid,
  id,
  setIsValidId,
  setIsLoading,
  setUserDetails
) => {
  if (!uid || !id) return

  const docRef = doc(db, 'chats', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const docData = docSnap.data()
    if (!docData[uid]) {
      setIsValidId(false)
      setIsLoading(false)
      return
    }

    setUserDetails({
      ...docData,
    })

    setIsValidId(true)
    setIsLoading(false)
  } else {
    setIsLoading(false)
    setIsValidId(false)
    return false
  }
}

export default validateID
