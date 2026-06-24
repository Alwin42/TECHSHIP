import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTheme } from './theme';

function NavScrollExample() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">Admin-dash</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Manage" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/users">Users</NavDropdown.Item>
              <NavDropdown.Item href="/projects">Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/profile">
                My Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Button 
            variant={theme === 'light' ? 'outline-dark' : 'outline-light'} 
            onClick={toggleTheme}
            className="d-flex align-items-center"
          >
            {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
          </Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;