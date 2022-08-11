import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Switch from "react-switch";

const Search = () => {

  

  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <div style={{"backgroundColor":"#f5f8fa", "minHeight":"30vh"}} >
        {/* <nav class="navbar navbar-light bg-light"> */}
              <h1 className='text-center budzralok' /* style={{"color":"#2d659d", "fontSize":"1.625rem"}} */>Buď žralok, pracuj pro startup! </h1>
                <div class="container d-flex mb-3 searchBar">
                <input type="text" class="form-control" style={{"borderRadius":"0"}} placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" style={{"borderRadius":"0"}} type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                
                </div>
                <div className='d-flex'>
                <Nav className="me-auto m-auto container">
              <NavDropdown title="Obor" id="basic-nav-dropdown"/>
              <NavDropdown title="Misto" id="basic-nav-dropdown"/>
              <NavDropdown title="Spoluprace" id="basic-nav-dropdown"/>
              <NavDropdown title="Odmena" id="basic-nav-dropdown"/>
              <NavDropdown title="Seniorita" id="basic-nav-dropdown"/>
              <NavDropdown title="Startupy" id="basic-nav-dropdown"/>
              <NavDropdown title="Technologie" id="basic-nav-dropdown"/>
              <NavDropdown title="Jazyky" id="basic-nav-dropdown"/>
                </Nav>

                
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      
          </div>

</div>
  )
}

export default Search