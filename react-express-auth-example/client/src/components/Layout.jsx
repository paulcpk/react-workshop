import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="app-content">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
