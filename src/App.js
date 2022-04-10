import { useContext, useEffect } from 'react'
import { authContext } from './store/AuthContext'

import { Routes, Route } from 'react-router-dom'

import auth from './firebase/auth'
import setIP from './jsFunctions/setIp'
import setAvatar from './jsFunctions/setAvatar'
import { onAuthStateChanged } from 'firebase/auth'

import Navbar from './components/nav/Navbar'
import Hero from './pages/home/Hero'
import Footer from './components/footer/Footer'
import PageNotFound from './pages/404/PageNotFound'
import ChangeAvatar from './pages/change-avatar/ChangeAvatar'
import Link from './pages/link/Link'

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
    <div className='h-screen scroll-smooth'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/change-avatar' element={<ChangeAvatar />} />
        <Route path='/link' element={<Link />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
