import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import logo from "../assets/logo1.png";
import contact5 from "../assets/contact5.png";
import { NavLink, Link } from "react-router-dom";
import { LinkContainer} from "react-router-bootstrap";


const Header = () => {
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="container ">
            <img src={logo} alt="logo" width={80} />
            <LinkContainer to="/">
            <Navbar.Brand href="#home">Contentful</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                <LinkContainer to="/countries">
                  <NavDropdown.Item>
                    Countries
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/cities">
                  <NavDropdown.Item>Cities</NavDropdown.Item>
                  </LinkContainer>
                  {/* <NavDropdown.Item href="#action/3.3">
                    Villages
                  </NavDropdown.Item> */}
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Contact
                  </NavDropdown.Item> */}
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
