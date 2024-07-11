import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../assets/logo.png'
import './styles.scss'; // Import your custom SCSS

const Footer = () => {
    return (
        <footer className="footer bg-background text-dark">
            <Container>
                <Row className="py-4">
                    <Col xs={12} md={6}>
                        <img src={logo} alt="Company Logo" className="footer-logo" />
                        <p>Sign up for our newsletter to stay updated on new features and releases.</p>
                        <Form inline className="newsletter-form">
                            <Form.Control type="email" placeholder="Enter your email" className="mr-2" />
                            <Button variant="dark" type="submit">Subscribe</Button>
                        </Form>
                        <p className="small mt-2">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                    </Col>
                    <Col xs={4} md={2}>
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li><a href="#about" className="text-dark">About Us</a></li>
                            <li><a href="#contact" className="text-dark">Contact Us</a></li>
                            <li><a href="#faqs" className="text-dark">FAQs</a></li>
                            <li><a href="#support" className="text-dark">Support</a></li>
                            <li><a href="#blog" className="text-dark">Blog</a></li>
                        </ul>
                    </Col>
                    <Col xs={4} md={2}>
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li><a href="#product" className="text-dark">Product</a></li>
                            <li><a href="#pricing" className="text-dark">Pricing</a></li>
                            <li><a href="#features" className="text-dark">Features</a></li>
                            <li><a href="#ads" className="text-dark">Ads</a></li>
                            <li><a href="#partners" className="text-dark">Partners</a></li>
                        </ul>
                    </Col>
                    <Col xs={4} md={2}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#facebook" className="text-dark">Facebook</a></li>
                            <li><a href="#instagram" className="text-dark">Instagram</a></li>
                            <li><a href="#shopee" className="text-dark">Shopee</a></li>
                            <li><a href="#tiktok" className="text-dark">Tiktok</a></li>
                            <li><a href="#youtube" className="text-dark">Youtube</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-dark" />
                <Row className="py-3">
                    <Col md={6}>
                        <p>© 2024 Flexi Disc. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <a href="#privacy" className="text-dark mr-3">Privacy Policy</a>
                        <a href="#terms" className="text-dark mr-3">Terms and Conditions</a>
                        <a href="#cookie" className="text-dark">Cookie Policy</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
