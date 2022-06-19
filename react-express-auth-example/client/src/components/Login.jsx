import { useState, useEffect, useContext } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'

const LOGIN_URL = '/login'

const Login = () => {
  const { setAuth } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        LOGIN_URL,
        `email=${email}&password=${password}`,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: false,
        }
      )

      console.log(JSON.stringify(response?.data))
      console.log(JSON.stringify(response))

      //   const accessToken = response?.data?.accessToken;

      setAuth({ isAuth: true, email })
      setEmail('')
      setPassword('')
      setSuccess(true)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
    }
  }

  const clickHandler = async (e, route) => {
    e.preventDefault()

    try {
      const response = await axios.get(route, {
        withCredentials: true,
      })

      console.log(JSON.stringify(response?.data))
      console.log(JSON.stringify(response))
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <button onClick={(e) => clickHandler(e, '/profile')}>
            Call Profile
          </button>
          <button onClick={(e) => clickHandler(e, '/orders')}>
            Call Orders
          </button>
          <button onClick={(e) => clickHandler(e, '/logout')}>
            Call Logout
          </button>
          {success ? (
            <>
              <h5 className="card-title">Success! Your are logged in!</h5>
              <p>
                <a href="/">Go to Home</a>
              </p>
            </>
          ) : (
            <>
              <h5 className="card-title">Login</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginBottom: '1rem' }}
                >
                  Submit
                </Button>
                {errMsg && <Alert variant="danger">{errMsg}</Alert>}
              </Form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Login
