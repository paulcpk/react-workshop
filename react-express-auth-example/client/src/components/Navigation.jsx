import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
} from 'react-bootstrap'

function Navigation() {
  const handleSubmit = () => {
    console.log('trigger logout')
  }
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="navbar-text">Hello NAME, you are STATUS</span>
        <Form onSubmit={handleSubmit}>
          <Button variant="primary" type="submit">
            Logout
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Navigation
