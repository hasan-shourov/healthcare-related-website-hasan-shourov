import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'
import './nav.css';
import Banner from '../banner/Banner';
import useAuth from '../../hook/useAuth';
const HeaderNav = () => {

    const {users, signoout} = useAuth({})
   
    return (
        <div>
            {/* logo */}
            <div className="p-3 d-flex justify-content-between container-md ">
                <img src={logo} alt="" />

                <div className="d-flex ">
                    <div className="d-flex align-items-center me-5">
                        <div >
                        <i className="fas fa-phone bg-primary d-none d-md-block text-white p-2 rounded-circle me-2"></i>
                        </div>

                        <div >
                        <small className="text-secondary d-none d-md-block">+0035234 <br /> +08347224 Hello</small>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div >
                        <i className="far fa-envelope bg-primary d-none d-md-block text-white p-2 rounded-circle me-2"></i>
                        </div>

                        <div >
                            <small className="text-secondary d-none  d-md-block">
                                healthkoradigmail.com 
                                <br />
                                koreya.care.health@gmail.com
                            </small>
                        </div>

                    </div>
                </div>
                
            </div>
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                <Navbar.Brand href="#home" ><i className="fas fa-hand-holding-medical"></i></Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link to="/home"  className="text-decoration-none navlink me-md-4"> Home </Link>
                    <Link to="/doctors"  className="text-decoration-none navlink me-md-4"> Doctors </Link>
                    <Link to="/about"  className="text-decoration-none navlink me-md-4"> About </Link>
                    <Link to="/team"  className="text-decoration-none navlink me-md-4"> Our Team </Link>
                   
                    
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    {!users.email ? <> <Nav.Link >
                        <Link to="login" className="border-end pe-3 text-decoration-none navlink ">LogIn</Link>
                    </Nav.Link>
                
                    <Nav.Link >
                        <Link to="signup" className=" pe-3 text-decoration-none navlink ">SignUp</Link>
                    </Nav.Link> </> : <button onClick={signoout} className="btn btn-outline text-white border ">LogOut</button> }
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
          </div>

        </div>
    );
};

export default HeaderNav;