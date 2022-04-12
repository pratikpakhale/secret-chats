import React, { useContext, useState, useRef } from 'react'
import { authContext } from '../../store/AuthContext'

import db from '../../firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'

import { FaArrowRight } from 'react-icons/fa'

const sendMessage = async (
  id,
  uid,
  message,
  chats,
  isFirstTime,
  setIsFirstTime,
  otherPersonUid
) => {
  const docRef = doc(db, 'chats', id)
  await setDoc(
    docRef,
    {
      chats: {
        ...chats,
        [uid]: {
          ...chats[uid],
          [Date.now().toString()]: message,
        },
      },
    },
    {
      merge: true,
    }
  )

  if (isFirstTime) {
    const docRef = doc(db, 'users', otherPersonUid)
    await setDoc(
      docRef,
      {
        chats: {
          [uid]: id,
        },
      },
      { merge: true }
    )

    setIsFirstTime(false)
  }
}

function InputGroup({ id, chats, otherPersonUid }) {
  const { uid } = useContext(authContext)

  const [isFirstTime, setIsFirstTime] = useState(true)

  const input = useRef()

  const sendHandler = () => {
    const inputMessage = input.current.value.trim()

    if (inputMessage && inputMessage.length !== 0) {
      sendMessage(
        id,
        uid,
        inputMessage,
        chats,
        isFirstTime,
        setIsFirstTime,
        otherPersonUid
      )
    }
    input.current.value = ''
  }

  return (
    <>
      <div className='input-group  px-5 py-2 w-full md:w-5/6 lg:w-4/6 absolute bottom-0'>
        <input
          type='text'
          placeholder='Message'
          className='input input-bordered w-full block'
          ref={input}
        />
        <button onClick={sendHandler} className='btn btn-square'>
          <FaArrowRight />
        </button>
      </div>
    </>
  )
}

export default InputGroup
