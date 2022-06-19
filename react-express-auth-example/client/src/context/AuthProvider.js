import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const COOKIE_NAMESPACE = 'AuthToken'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    console.log('init')
    console.log('Cookies.get', Cookies.get(COOKIE_NAMESPACE))
    setAuth({
      isAuth: !!Cookies.get(COOKIE_NAMESPACE),
    })
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
