import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'

import { AuthenticationContext } from '../context/AuthenticationContext'

const Dashboard = () => {
  const { auth } = useContext(AuthenticationContext)
  const setLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfully?
        window.location.replace('http://localhost:5173')
        window.alert('successfully Logged out')
      })
      .catch((error) => {})
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email
        // ...
        console.log('uid', uid)
      } else {
        console.log('user is logged out')
      }
    })
  }, [])
  return (
    <div>
      <h4>welcome home</h4>
      <button onClick={setLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
