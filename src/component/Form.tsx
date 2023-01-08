import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
import '../style/Form.css'
import { AuthenticationContext } from '../context/AuthenticationContext'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const { auth } = useContext(AuthenticationContext)

  const onSubmit = async (e) => {    
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password1)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        window.alert('successfully registered')
        window.location.replace('http://localhost:5173/Login')
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message
        window.alert(errorMessage)
        // ..
      })
  }

  return (
    <div className='container'>
      <h2>Sign Up</h2>
      <form action=''>
        <input
          type='email'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <input
          type='password'
          placeholder='Enter your password'
          required
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
        />
        <input
          type='button'
          className='btn'
          value='Submit'
          onClick={onSubmit}
        />
        <p>
          Already have an account? <span></span>
          <Link to='/Login'>
            <a href='#'>Login</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Form
