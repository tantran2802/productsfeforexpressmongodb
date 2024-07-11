import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
export default function Info(){
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
            'https://ogu8fnrpv7.execute-api.ap-southeast-1.amazonaws.com/dev/api/products',
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
                <h1 className="">Discover the Power of Flexi Disc Products</h1>
                <p className="">Experience fast and effective pain relief with our innovative Flexi Disc products. Say goodbye to discomfort and hello to a pain-free life.</p>
                <button type="button" className="btn bg-dark text-background m-3">Shop Now</button>
                <button type="button" className="btn bg-background m-3">Learn More</button>
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
                <h1 className="">Discover the Power of Our Pain Relief Patch for Fast and Effective Relief</h1>
                <p className="">Our Pain Relief Patch is specially formulated to provide fast and effective relief from pain. With its unique blend of ingredients, it targets the source of the pain and provides long-lasting relief.</p>
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
                <h1 className="text-center">Pricing Options</h1>
                <p className="text-center">Choose the plan that suits your needs and budget.</p>
                <div className="button-group mb-3">
                {/* <button type="button" className="btn bg-dark text-background m-3">Pack</button>
                <button type="button" className="btn bg-background m-3">Box</button> */}
                    <Button
                            variant={selectedOption === 'piece' ? 'dark' : 'secondary'}
                            onClick={() => setSelectedOption('piece')}
                            className="me-2"
                        >
                            Piece
                    </Button>
                    <Button
                            variant={selectedOption === 'packet' ? 'dark' : 'secondary'}
                            onClick={() => setSelectedOption('packet')}
                        >
                            Packet
                    </Button>
                </div>
            </Col>
            <Col xs={12} md={6} className="pricing-option border border-dark">
                    <div className={selectedOption === 'piece' ? 'active' : ''}>
                        <h2>Neck Patch</h2>
                        <p>{selectedOption === 'piece' ? '$1.19 per two pieces' : '$5.89 per packet 10 pieces'}</p>
                    </div>
            </Col>
            <Col xs={12} md={6} className="pricing-option border border-dark">
                    <div className={selectedOption === 'piece' ? 'active' : ''}>
                        <h2>Back Patch</h2>
                        <p>{selectedOption === 'piece' ? '$1.39 per two pieces' : '$6.89 per packet 10 pieces'}</p>
                    </div>
            </Col>
        </Row>
        </Container>);
}