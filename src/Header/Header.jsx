import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";
import contact5 from "../assets/contact5.png";
import { NavLink, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
          <Container className="container-fluid">
            <Link as={Link} to="/">
              <img className="contact-logo" src={logo} alt="logo" width={80} />
            </Link>
            <Navbar.Brand href="#home">Contentful</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="align-items-center">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>

            <div className="navbar-contact">
              <Link as={Link} to="contact">
                <img src={contact5} alt="contact" width={50} />
              </Link>
            </div>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
