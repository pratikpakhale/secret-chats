import React, { createContext, useState } from 'react'

const authContext = createContext({
  isLoggedIn: false,
  pfpUrl: '',
  uid: '',
  id: '',
  setIsLoggedIn: () => {},
  setPfpUrl: () => {},
  setUid: () => {},
  setId: () => {},
})

export { authContext }

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [pfpUrl, setPfpUrl] = useState(null)
  const [uid, setUid] = useState(null)
  const [id, setId] = useState(null)

  const contextValue = {
    isLoggedIn,
    pfpUrl,
    uid,
    id,
    setIsLoggedIn,
    setPfpUrl,
    setUid,
    setId,
  }

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  )
}

export default AuthProvider
