import React from 'react'

import { Link } from 'react-router-dom'

function AllChats({ chats }) {
  const chatArr = Object.keys(chats)

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Alias (random)</th>
              <th>Chat</th>
            </tr>
          </thead>
          <tbody>
            {chatArr.map(chat => {
              return (
                <tr key={chat}>
                  <td>some name</td>
                  <td>
                    <Link to={`/chat/${chats[chat]}`}>
                      <button className='btn btn-ghost'>Chat</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllChats
