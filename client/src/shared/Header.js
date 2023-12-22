import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import{Link} from "react-bootstrap-dom";
import{ removeAuthUser, getAuthUser} from "../helper/storage";
import{useNavigare} from "react-router-dom"

const Header = () => {
  const navigate =useNavigate();
  const auth= getAuthUser();
  console.log();
  const Logout= ()=> {
    removeAuthUser();
    navigate("/");
  }
  return <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">CAR AGENCY</Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav=link" to={'/'}>Home</Link>
        <Link className="nav=link" to={'/admin'}>Admin</Link>

        {!auth&&(
          <>
           <Link className="nav=link"  to={'/login'}>Login</Link>
           <Link className="nav=link" to={'/register'}>Register</Link>
           </>
        )}


        {auth&& auth.role ===1 &&(
          <>
           <Link className="nav=link"  to={'/manage-cars'}>Manage Cars</Link>
           </>
        )}


      <Nav className="ms-auto">
        {auth && <Nav.Link onClick={Logout}>Logout</Nav.Link>}

      </Nav>
      
        </Nav>
    </Container>
  </Navbar>

    </>;

};

export default Header;
