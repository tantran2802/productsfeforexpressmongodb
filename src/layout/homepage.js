import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
export default function HomePage() {
    return (<div>
        <Navbar expand="lg" className="bg-background">
            <Container className="">
                <Navbar.Brand className="rounded"
                                as={Link} 
                                to='/products'><Image src={logo} width='132' height='60' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex justify-content-evenly w-100">
                    <Nav.Link as={Link} to='/info'>About Us</Nav.Link>
                    <Nav.Link as={Link} to='/info'>Mission</Nav.Link>
                    <Nav.Link as={Link} to='/info'>Products</Nav.Link>
                    <NavDropdown title="Contact" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Shopee</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Tiktok
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Book for Ad
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div>
            <Outlet/>
        </div>
        <div>

        </div>
    </div>);
}