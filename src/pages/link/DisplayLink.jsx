import React, { useContext, useState } from 'react'
import { authContext } from '../../store/AuthContext'

import Loader from '../../components/utils/Loader'

function DisplayLink({ url }) {
  const { isLoggedIn } = useContext(authContext)

  const [tooltip, setTooltip] = useState('copy')

  const onInputClickHandler = e => {
    navigator.clipboard.writeText(e.target.value)
    setTooltip('copied')
  }

  return (
    <>
      {isLoggedIn && (
        <h1 className='text-3xl font-bold font-ubuntu'>
          Share this link to start getting Anonymous Messages!
        </h1>
      )}
      {isLoggedIn && url ? (
        <div className='tooltip mt-10 w-full' data-tip={tooltip}>
          <input
            type='text'
            placeholder=''
            className='input input-bordered w-4/6 input-md'
            value={`${window.location.href.replace('link', 'message')}/${url}`}
            onClick={onInputClickHandler}
            readOnly
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default DisplayLink
