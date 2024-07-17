import { Container, Image, Row, Col, Button } from "react-bootstrap";
import poster from '../assets/poster01.png'
import sideposter from '../assets/sideposter.png'
export default function AboutUs(){
    return(
        <Container>
            <Row className="my-5 align-items-center">
                <Col md={12}>
                    <a href="https://www.youtube.com/watch?v=ByXuk9QqQkk" target="_blank">
                    <Image src={poster} className="poster"/>
                    </a>
                </Col>
                <Col md={6} className="text-section">
                    <h1 className="m-3">Transforming Ideas into Beautiful and Functional Websites</h1>
                </Col>
                <Col md={6} className="text-section">
                    <p className="m-3">Welcome to our agency, where we specialize in consulting, designing, and building small-scale websites with simple yet powerful features. Our team of experts is dedicated to creating stunning websites that not only look great but also deliver exceptional user experiences.</p>
                    <Button variant="dark" className="m-3">Learn More</Button>
                    <Button variant="background" className="m-3">Sign Up</Button>
                </Col>
            </Row>
            <Row className="my-5 align-items-center">
                <Col md={6} className="text-section">
                    <h6>Solutions</h6>
                    <h1 className="m-3">Transforming Businesses with Innovative Solutions</h1>
                    <p className="m-3">Our consulting services provide expert guidance and support to help businesses achieve their goals. We offer tailored solutions that address your unique challenges and drive growth.</p>
                    <div className="d-flex">
                        <div>
                            <h4>Consulting</h4>
                            <p className="m-3">Unlock your business potential with our strategic consulting services and industry expertise.</p>
                        </div>
                        <div>
                            <h4>Design</h4>
                            <p className="m-3">Create visually stunning websites that captivate your audience and drive engagement.</p>
                        </div>
                    </div>
                    <Button variant="dark" className="m-3">Learn More</Button>
                    <Button variant="background" className="m-3">Sign Up</Button>
                </Col>
                <Col md={6}>
                    <Image src={sideposter} className="sideposter"/>
                </Col>
            </Row>
        </Container>
    );
}