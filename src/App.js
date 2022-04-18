import { useContext, useEffect, useState } from 'react'
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
import ChatInterface from './pages/chats/ChatInterface'
import Message from './pages/message/Message'
import PageNotFound from './pages/404/PageNotFound'
import Loader from './components/utils/Loader'

function App() {
  const { setIsLoggedIn, setUid, setPfpUrl, uid } = useContext(authContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIP(uid)
        setAvatar(uid, setPfpUrl)
        setUid(user.uid)
        setIsLoggedIn(true)
        setIsLoading(false)
      } else {
        setIsLoggedIn(false)
        setIsLoading(false)
      }
    })
  }, [setIsLoggedIn, setUid, uid, setPfpUrl])

  return (
    <div className='h-screen scroll-smooth bg-base-200'>
      <Navbar />

      {isLoading && (
        <div className='hero h-5/6 bg-base-200'>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <Loader />
            </div>
          </div>
        </div>
      )}
      <>
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
          <Route path='/chat/:id' element={<ChatInterface />} />
          <Route path='/message/:id' element={<Message />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </>
    </div>
  )
}

export default App
