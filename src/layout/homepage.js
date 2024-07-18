import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import Footer from "./footer";
import {useLanguage} from '../utility/language-context';
export default function HomePage() {
    const { switchLanguage } = useLanguage();
    return (<div>
        <Navbar expand="lg" className="bg-background">
            <Container className="">
                <Navbar.Brand className="rounded"
                                as={Link} 
                                to='/'><Image src={logo} width='132' height='60' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex justify-content-evenly w-100">
                    <Nav.Link as={Link} to='/about-us'>About Us</Nav.Link>
                    <Nav.Link as={Link} to='/'>Mission</Nav.Link>
                    <Nav.Link as={Link} to='/'>Products</Nav.Link>
                    <NavDropdown title="Language" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => switchLanguage('en')}>English</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => switchLanguage('vi')}>Vietnamese</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Book for Ad
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="content">
            <Outlet/>
        </div>
        <Footer />
    </div>);
}