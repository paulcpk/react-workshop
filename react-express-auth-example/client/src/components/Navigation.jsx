import { useContext } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios, { getRequestHandler } from '../api/axios'
import AuthContext from '../context/AuthProvider'

function Navigation() {
  const {
    auth: { isAuth },
    setAuth,
  } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.get('/logout', {
        withCredentials: true,
      })

      console.log('response', response)
      setAuth({ isAuth: false })
      navigate('/')
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        {isAuth ? (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="profile" className="nav-link">
                  Profile
                </Link>
                <Link to="orders" className="nav-link">
                  Orders
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Button variant="primary" onClick={(e) => handleLogout(e)}>
              Logout
            </Button>
          </>
        ) : (
          <Link to="login">Login</Link>
        )}
      </Container>
    </Navbar>
  )
}

export default Navigation
