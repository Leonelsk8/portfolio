import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

function NavBar(props){
  const bgNav = props.bgNav;
  const modeChange = props.buttMode;
  return(
    <Navbar bg={bgNav} expand="lg" variant={bgNav} className={`border-bottom border-secondary py-2`}>
      <Container fluid className='px-2 px-md-4'>
        <Navbar.Brand href="#home">Portfolio - Leonel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='active' href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <label className="interruptor">
              <input type="checkbox" onClick={modeChange}/>
              <span><ion-icon name="moon-outline" class="moon"></ion-icon></span>
            </label>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;