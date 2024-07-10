import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../assets/logo.png'
import './styles.scss'; // Import your custom SCSS

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <Container>
                <Row className="py-4">
                    <Col md={4}>
                        <img src={logo} alt="Company Logo" className="footer-logo" />
                        <p>Sign up for our newsletter to stay updated on new features and releases.</p>
                        <Form inline className="newsletter-form">
                            <Form.Control type="email" placeholder="Enter your email" className="mr-2" />
                            <Button variant="primary" type="submit">Subscribe</Button>
                        </Form>
                        <p className="small mt-2">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                    </Col>
                    <Col md={2}>
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li><a href="#about" className="text-white">About Us</a></li>
                            <li><a href="#contact" className="text-white">Contact Us</a></li>
                            <li><a href="#faqs" className="text-white">FAQs</a></li>
                            <li><a href="#support" className="text-white">Support</a></li>
                            <li><a href="#blog" className="text-white">Blog</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li><a href="#product" className="text-white">Product</a></li>
                            <li><a href="#pricing" className="text-white">Pricing</a></li>
                            <li><a href="#features" className="text-white">Features</a></li>
                            <li><a href="#ads" className="text-white">Ads</a></li>
                            <li><a href="#partners" className="text-white">Partners</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#facebook" className="text-white">Facebook</a></li>
                            <li><a href="#instagram" className="text-white">Instagram</a></li>
                            <li><a href="#shopee" className="text-white">Shopee</a></li>
                            <li><a href="#tiktok" className="text-white">Tiktok</a></li>
                            <li><a href="#youtube" className="text-white">Youtube</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-white" />
                <Row className="py-3">
                    <Col md={6}>
                        <p>© 2024 Flexi Disc. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <a href="#privacy" className="text-white mr-3">Privacy Policy</a>
                        <a href="#terms" className="text-white mr-3">Terms and Conditions</a>
                        <a href="#cookie" className="text-white">Cookie Policy</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
