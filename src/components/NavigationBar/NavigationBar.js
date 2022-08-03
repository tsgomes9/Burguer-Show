import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import logo from '../../img/logo.png'
import './style/NavigationBar.css'

function NavigationBar() {
  const [show, setShow] = useState(false)

  const toggleOffCanvas = () => {
    setShow(!show)
  }

  const toggleOffCanvasLinks = () => {
    setTimeout(() => {
      setShow(!show)
    }, 1000)
  }

  return (
    <div>
      <Navbar
        key="expand"
        expand="lg"
        className="text-light navbar-dark d-flex p-3 navbar-area"
        bg="dark"
        fixed="top"
      >
        <Container>
          <a href="#session-header" className="text-decoration-none">
            <div className="logo-area">
              <div>
                <img src={logo} alt="logo"></img>
              </div>
              <div>BURGUER SHOW</div>
            </div>
          </a>

          <div className="ms-auto">
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              onClick={toggleOffCanvas}
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
              show={show}
              onHide={toggleOffCanvas}
            >
              <div className="bg-dark text-light h-100">
                <Offcanvas.Header closeButton className="offcanvas-header">
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                    Menu principal
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                  <Nav.Link
                    className="nav-bar-link m-2"
                    href="#session-high"
                    onClick={toggleOffCanvasLinks}
                  >
                    Em alta
                  </Nav.Link>
                  <Nav.Link
                    className="nav-bar-link m-2"
                    href="#session-combos"
                    onClick={toggleOffCanvasLinks}
                  >
                    Combos
                  </Nav.Link>
                  <Nav.Link
                    className="nav-bar-link m-2"
                    href="#session-reservation"
                    onClick={toggleOffCanvasLinks}
                  >
                    Reservas
                  </Nav.Link>
                  <Nav.Link
                    className="nav-bar-link m-2"
                    href="#session-contact"
                    onClick={toggleOffCanvasLinks}
                  >
                    Contatos
                  </Nav.Link>
                </Offcanvas.Body>
              </div>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
