import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthenticationContext } from '../context/AuthenticationContext'

// import { auth } from '../firebase'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(AuthenticationContext)

  const Login = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        window.alert('successfully registered')
        window.location.replace('http://localhost:5173/Dashboard')
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message
        window.alert(errorMessage)
      })
  }

  return (
    <div className='container'>
      <h2>Login</h2>
      <form action=''>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type='button' className='btn' value='Submit' onClick={Login} />
      </form>
    </div>
  )
}

export default Login
