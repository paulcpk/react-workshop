import logo from './logo.svg'
import Nav from './Nav'

function Header() {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <Nav />
    </header>
  )
}

export default Header
