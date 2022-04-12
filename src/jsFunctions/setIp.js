import db from '../firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'

const getIPString = async () => {
  const response = await fetch('https://api.ipify.org/?format=json')
  let data
  try {
    data = await response.json()
  } catch (e) {
    // return e
  }

  return data
}

const setIP = async uid => {
  if (!uid) return

  let ip = await getIPString()

  const docRef = doc(db, 'users', uid)

  await setDoc(
    docRef,
    {
      ip: ip,
    },
    {
      merge: true,
    }
  )
}

export default setIP
