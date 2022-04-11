import { useContext, useEffect } from 'react'
import { authContext } from './store/AuthContext'

import { Routes, Route } from 'react-router-dom'

import auth from './firebase/auth'
import setIP from './jsFunctions/setIp'
import setAvatar from './jsFunctions/setAvatar'
import { onAuthStateChanged } from 'firebase/auth'

import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import Hero from './pages/home/Hero'
import ChangeAvatar from './pages/change-avatar/ChangeAvatar'
import Link from './pages/link/Link'
import Chats from './pages/chats/Chats'
import Message from './pages/message/Message'
import PageNotFound from './pages/404/PageNotFound'

function App() {
  const { setIsLoggedIn, setUid, setPfpUrl, uid } = useContext(authContext)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIP(uid)
        setAvatar(uid, setPfpUrl)
        setUid(user.uid)
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [setIsLoggedIn, setUid, uid, setPfpUrl])

  return (
    <div className='h-screen scroll-smooth bg-base-200'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />
        <Route path='/change-avatar' element={<ChangeAvatar />} />
        <Route path='/link' element={<Link />} />
        <Route path='/chat' element={<Chats />} />
        <Route path='/message/:id' element={<Message />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
