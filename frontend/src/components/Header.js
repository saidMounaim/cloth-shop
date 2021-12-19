import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>CLOTHSHOP</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i> SignIn
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
