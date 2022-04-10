import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBFrxsxjXA57jAxoLHX_2D4GDwlsUk0h_s',
  authDomain: 'secret-chats-f1cc6.firebaseapp.com',
  databaseURL: 'https://secret-chats-f1cc6-default-rtdb.firebaseio.com',
  projectId: 'secret-chats-f1cc6',
  storageBucket: 'secret-chats-f1cc6.appspot.com',
  messagingSenderId: '988676461530',
  appId: '1:988676461530:web:428a510ada7a42e61526e3',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
