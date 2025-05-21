import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useLanguage } from "../utility/language-context";
export default function Info(){
    const {t} = useLanguage();
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);
    const [selectedOption, setSelectedOption] = useState('piece'); // Default option
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSelect1 = (selectedIndex) => {
    setIndex1(selectedIndex);
  }
    function fetchProductsData(){
        fetch(
            'https://jv0q0aihea.execute-api.ap-southeast-1.amazonaws.com/dev/api/products',
        {
            method: 'GET',
        }).then(async (data) => {
            const dataReturned = await data.json();
            setProducts(dataReturned)
        })
        .catch(e => console.log(e));
    }
    useEffect(() => {
        fetchProductsData();
    },[])
    return (
        <Container>
            <Row className="my-5 align-items-center">
                <Col xs={12} md={6} className="text-section">
                    <h1>{t("info-section1-h1")}</h1>
                    <p>{t("info-section1-p")}</p>
                    <button type="button" className="btn bg-dark text-background m-3">{t("info-section1-btn1")}</button>
                    <button type="button" className="btn bg-background m-3">{t("info-section1-btn2")}</button>
                </Col>
                <Col xs={12} md={6} className="carousel-section">
                    {products.length > 0 ? 
                    (<Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
                        {
                            products[0].image.map((imag,i) =>{
                                return (
                                    <Carousel.Item>
                                        <img key={i} className="d-block w-100" src={imag}/>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    ) 
                    :  (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>)
                }
                </Col>
            </Row>
            <Row className="my-5 align-items-center">
                <Col xs={12} md={6} className="text-section">
                    <h1>{t("info-section2-h1")}</h1>
                    <p>{t("info-section2-p")}</p>
                </Col>
                <Col xs={12} md={6} className="carousel-section">
                    {products.length > 0 ? 
                    (<Carousel data-bs-theme="dark" activeIndex={index1} onSelect={handleSelect1}>
                        {
                            products[1].image.map((imag,i) =>{
                                return (
                                    <Carousel.Item>
                                        <img key={i} className="d-block w-100" src={imag}/>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                    ) 
                    :  (<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>)
                }
                </Col>
            </Row>
            <Row className="my-5">
                <Col xs={12}>
                    <h1 className="text-center">{t("info-section3-h1")}</h1>
                    <p className="text-center">{t("info-section3-p")}</p>
                    <div className="button-group mb-3">
                        <Button
                                variant={selectedOption === 'piece' ? 'dark' : 'secondary'}
                                onClick={() => setSelectedOption('piece')}
                                className="me-2"
                            >
                                {t("info-section3-btn1")}
                        </Button>
                        <Button
                                variant={selectedOption === 'packet' ? 'dark' : 'secondary'}
                                onClick={() => setSelectedOption('packet')}
                            >
                                {t("info-section3-btn2")}
                        </Button>
                    </div>
                </Col>
                <Col xs={12} md={6} className="pricing-option border border-dark">
                        <div className={selectedOption === 'piece' ? 'active' : ''}>
                            <h2>{t("info-section3-div1-h2")}</h2>
                            <p>{selectedOption === 'piece' ? t("info-section3-div1-p1") : t("info-section3-div1-p2")}</p>
                        </div>
                </Col>
                <Col xs={12} md={6} className="pricing-option border border-dark">
                        <div className={selectedOption === 'piece' ? 'active' : ''}>
                            <h2>{t("info-section3-div2-h2")}</h2>
                            <p>{selectedOption === 'piece' ? t("info-section3-div2-p1") : t("info-section3-div2-p2")}</p>
                        </div>
                </Col>
            </Row>
        </Container>);
}


