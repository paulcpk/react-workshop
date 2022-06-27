import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const COOKIE_NAMESPACE = 'AuthToken'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
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
