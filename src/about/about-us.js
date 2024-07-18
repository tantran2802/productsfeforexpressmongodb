import { Container, Image, Row, Col, Button } from "react-bootstrap";
import poster from '../assets/poster01.png';
import sideposter from '../assets/sideposter.png';
import { useLanguage } from "../utility/language-context";
export default function AboutUs(){
    const {t} = useLanguage();
    return(
        <Container>
            <Row className="my-5 align-items-center">
                <Col md={12}>
                    <a href="https://www.youtube.com/watch?v=ByXuk9QqQkk" target="_blank">
                    <Image src={poster} className="poster"/>
                    </a>
                </Col>
                <Col md={6} className="text-section">
                    <h1 className="m-3">{t("aboutus-section1-h1")}</h1>
                </Col>
                <Col md={6} className="text-section">
                    <p className="m-3">{t("aboutus-section1-p")}</p>
                    <Button variant="dark" className="m-3">{t("aboutus-section1-btn-dark")}</Button>
                    <Button variant="background" className="m-3">{t("aboutus-section1-btn-bg")}</Button>
                </Col>
            </Row>
            <Row className="my-5 align-items-center">
                <Col md={6} className="text-section">
                    <h6>{t("aboutus-section2-h6")}</h6>
                    <h1 className="m-3">{t("aboutus-section2-h1")}</h1>
                    <p className="m-3">{t("aboutus-section2-p1")}</p>
                    <div className="d-flex">
                        <div>
                            <h4>{t("aboutus-section2-h4-1")}</h4>
                            <p className="m-3">{t("aboutus-section2-p2")}</p>
                        </div>
                        <div>
                            <h4>{t("aboutus-section2-h4-2")}</h4>
                            <p className="m-3">{t("aboutus-section2-p3")}</p>
                        </div>
                    </div>
                    <Button variant="dark" className="m-3">{t("aboutus-section1-btn-dark")}</Button>
                    <Button variant="background" className="m-3">{t("aboutus-section1-btn-bg")}</Button>
                </Col>
                <Col md={6}>
                    <Image src={sideposter} className="sideposter"/>
                </Col>
            </Row>
        </Container>
    );
}