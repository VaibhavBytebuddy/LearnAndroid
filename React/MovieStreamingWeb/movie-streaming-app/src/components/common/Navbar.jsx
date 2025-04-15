import React from 'react'
import {Container, Nav, Navbar } from 'react-bootstrap'

const MainNavbar = () => {
  return (
          <Navbar bg="dark" variant="dark" expand="lg" className='rounded'>
                    <Container>
                              <Navbar.Brand href='#home'>MovieSByte</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="bassic-navbar-nav">
                                        <Nav className='me-auto'>
                                                  <Nav.Link href="#home">Home</Nav.Link>
                                                  <Nav.Link href="#link">Link</Nav.Link>
                                                  <Nav.Link href="#link">Link</Nav.Link>

                                        </Nav>
                                </Navbar.Collapse>


                    </Container>
          
          </Navbar>
    
  )
}

export default MainNavbar