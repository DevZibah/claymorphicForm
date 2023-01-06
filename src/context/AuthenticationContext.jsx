// storeContext contains our data from data.json
import React, { createContext, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const AuthenticationContext = createContext()

const AuthenticationContextProvider = ({ children }) => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyCyBpuAhC3jqPXTkrfNrpTfVW6QOvMxPQg',
    authDomain: 'claymorphic-form.firebaseapp.com',
    databaseURL: 'https://claymorphic-form-default-rtdb.firebaseio.com',
    projectId: 'claymorphic-form',
    storageBucket: 'claymorphic-form.appspot.com',
    messagingSenderId: '868240632591',
    appId: '1:868240632591:web:cf05d9f9f3269900542c7a',
    measurementId: 'G-0VXQV0LFGW',
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  return (
    <AuthenticationContext.Provider
      value={{
        firebaseConfig,
        auth,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
