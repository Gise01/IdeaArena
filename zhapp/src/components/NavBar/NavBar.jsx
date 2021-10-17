import React from 'react'
import {Navbar, NavDropdown, Container, Nav} from 'react-bootstrap'
import CartWidget from '../Assets/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({qBuy}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="/img/Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          ZeroHumedad
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="navbarScrollingDropdown" bg="secondary">
              <Link to="/categorias/Revestimiento" className="dropdown-item">Revestimiento</Link>
              <Link to="/categorias/Cielorraso" className="dropdown-item">Cielorraso</Link>
              <Link to="/categorias/Guarda" className="dropdown-item">Guarda</Link>
              <Link to="/categorias/Adicionales" className="dropdown-item">Adicionales</Link>
            </NavDropdown>
            <Link to="/cotizador" className="nav-link" tabIndex="0">Cotizador</Link>
            <Link to="/contacto" className="nav-link" tabIndex="0">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget qBuy={qBuy}/>
      </Container>
    </Navbar>
  )
}

export default NavBar