import React, { useEffect, useState } from 'react'

import ChatUI from '../../components/chatUI/ChatUI'

import getPfpUrl from '../../jsFunctions/getPfpUrl'

function Chat({ username, uid, chatId }) {
  const [pfpUrl, setPfpUrl] = useState(
    'https://img.icons8.com/flat-round/64/000000/owl.png'
  )

  useEffect(() => {
    getPfpUrl(uid, setPfpUrl)
  }, [uid])

  return <ChatUI username={username} pfpUrl={pfpUrl} />
}

export default Chat
