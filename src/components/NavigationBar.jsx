
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container className="bg-primary" >
                <Link className='nav-link' to="#home">Our Website</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/products">products</Link>
                        <Link className='nav-link' to="/login">contact Us</Link>
                        <Link className='btn btn-danger ms-4' to="/Signup">Signup/Login</Link>

                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Items</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                More about our items
                            </NavDropdown.Item>

                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default NavigationBar;

