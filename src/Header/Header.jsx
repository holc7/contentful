import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";
import contact5 from "../assets/contact5.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="container ">
            <Link to="/">
              <img src={logo} alt="logo" width={80} />
            </Link>
            <Navbar.Brand href="#home">Contentful</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Countries
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cities</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Villages
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Link as={Link} to="contact">
              <img
                className="contact-logo"
                src={contact5}
                alt="logo"
                width={50}
              />
            </Link>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
