import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
  return (
    <div className="Nav">
        <Navbar expand="bg" variant="dark" bg="dark">
            <Navbar.Brand href="#">First React App</Navbar.Brand>
        </Navbar>
    </div>
  );
}

export default Nav;
