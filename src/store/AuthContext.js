import React, { createContext, useState } from 'react'

const authContext = createContext({
  isLoggedIn: false,
  pfpUrl: '',
  uid: '',
  setIsLoggedIn: () => {},
  setPfpUrl: () => {},
  setUid: () => {},
})

export { authContext }

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [pfpUrl, setPfpUrl] = useState(null)
  const [uid, setUid] = useState(null)

  const contextValue = {
    isLoggedIn,
    pfpUrl,
    uid,
    setIsLoggedIn,
    setPfpUrl,
    setUid,
  }

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  )
}

export default AuthProvider
