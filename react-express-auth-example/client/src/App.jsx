import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Unauthorized from './components/Unauthorized'
import NotFound from './components/NotFound'
import Orders from './components/Orders'
import Profile from './components/Profile'
import AuthContext from './context/AuthProvider'
import './App.css'
import Home from './components/Home'

function App() {
  const {
    auth: { isAuth },
  } = useContext(AuthContext)

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          <Route
            path="profile"
            element={isAuth ? <Profile /> : <Unauthorized />}
          />

          <Route
            path="orders"
            element={isAuth ? <Orders /> : <Unauthorized />}
          />

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
