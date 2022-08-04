/* import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="#light" rexpand="lg">
      
      <Container>
        <Navbar.Brand href="#home">Startupjobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{"outline":"none"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="#home">Nabídky</Nav.Link>
            <Nav.Link href="#link">startupy</Nav.Link>
            <Nav.Link href="#link">Testy Znalostí</Nav.Link>
            <Nav.Link href="#link">Marketplace</Nav.Link>
            <Nav.Link href="#link">Vzdělávání</Nav.Link>
            <Nav.Link href="#link">Proč startup?</Nav.Link>
            <Nav.Link href="#link">O Nás</Nav.Link>
            <Nav.Link href="#link">Můj profil</Nav.Link>
          
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation; */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top mainNav" style={{"backgroundColor":"#f5f8fa"}}>
      <Container>
        <Navbar.Brand href="#home" className="logo">Startupjobs</Navbar.Brand>
        <Nav className="me-auto d-flex flex-row">
            <Nav.Link className="" href="#home">Nabídky</Nav.Link>
            <Nav.Link className="px-2" href="#link">startupy</Nav.Link>
            <Nav.Link className="px-2" href="#link">Testy Znalostí</Nav.Link>
            <Nav.Link className="" href="#link">Marketplace</Nav.Link>
            </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{"outline":"none"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;