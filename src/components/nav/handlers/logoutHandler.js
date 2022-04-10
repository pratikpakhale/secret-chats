import auth from '../../../firebase/auth'
import { deleteUser } from 'firebase/auth'

const logoutHandler = () => {
  const user = auth.currentUser

  const deleteConfirm = window.confirm(
    'Are you sure you want to delete your account?'
  )

  if (!deleteConfirm) return

  deleteUser(user)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error)
    })
}

export default logoutHandler
