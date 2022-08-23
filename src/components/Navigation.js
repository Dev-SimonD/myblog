import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../assets/logo.png"
import Image from "react-bootstrap/Image"

function Navigation() {
  return (
    /* <Navbar bg="light" expand="lg" className="fixed-top mainNav" style={{"backgroundColor":"#f5f8fa"}}>
        <Navbar.Brand href="#home" className="logo"><Image src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{"outline":"none !important"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex flex-row justify-between">
          <Nav.Link className="pl-4" href="#home">Nabídky</Nav.Link>
            <Nav.Link className="px-2" href="#link">Startupy</Nav.Link>
            <Nav.Link className="pe-2" href="#link">Testy</Nav.Link>
          <Nav.Link className="" href="#link">Marketplace</Nav.Link>   
            <Nav.Link href="#home">Vzdělávání</Nav.Link>
            <Nav.Link href="#link">Proč startup?</Nav.Link>
            <Nav.Link href="#link">O Nás</Nav.Link>
            <Nav.Link href="#link">Můj profil</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar> */
    <nav class="navbar navbar-expand-xl bg-light fixed-top mainNav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">StartupJobs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-align-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nabídky</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Startupy">Startupy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Testy">Testy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Marketplace">Marketplace</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Vzdělávání">Vzdělávání</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Proč startup">Proč startup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#O nas">O nas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Profil">Profil</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="hledej" aria-label="Hledej"/>
        <button class="btn btn-outline-success" type="submit">Hledej</button>
      </form>
    </div>
  </div>
</nav>
    /* <Navbar bg="light" expand="lg" className="fixed-top mainNav" style={{"backgroundColor":"#f5f8fa"}}>
        <Navbar.Brand href="#home" className="logo"><Image src={Logo}/></Navbar.Brand>
        <Nav className="d-flex flex-row justify-between">
            <Nav.Link className="pl-4" href="#home">Nabídky</Nav.Link>
            <Nav.Link className="px-2" href="#link">Startupy</Nav.Link>
            <Nav.Link className="pe-2" href="#link">Testy</Nav.Link>
          <Nav.Link className="" href="#link">Marketplace</Nav.Link>         
            </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{"outline":"none"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Vzdělávání</Nav.Link>
            <Nav.Link href="#link">Proč startup?</Nav.Link>
            <Nav.Link href="#link">O Nás</Nav.Link>
            <Nav.Link href="#link">Můj profil</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar> */
   

    
  );
}

export default Navigation;