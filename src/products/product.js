import { useEffect, useState } from "react";
import { Spinner, Accordion } from "react-bootstrap";
export default function Product(){
    const [products, setProducts] = useState([]);
    function fetchProductsData(){
        fetch(
            'https://ogu8fnrpv7.execute-api.ap-southeast-1.amazonaws.com/dev/api/products',
        {
            method: 'GET',
            // mode: 'cors'
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
    <div className="container-fluid d-flex">
        {products.length > 0 ? (
            products.map((p,i) => {
                return (
                <div className='container w-50 p-0 m-1' key={i}>
                        {p.image.length > 0 ? (
                            <div className='row'>
                                {p.image.map((image, index) => {
                                    return (
                                    <div key={index} className='col'>
                                        <img className='img-fluid rounded' src={image} alt='images'/>
                                    </div>
                                    )})}
                            </div>
                        ) : <></>}
                    <div className="row">
                        <div className="col">
                            <h1 className='text-darker text-center' key={i}>{p.name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                        <Accordion.Header>Description</Accordion.Header>
                                        <Accordion.Body>
                                            {p.description.split(";")
                                            .map((item, index) => {
                                                return <p key={index} className="fs-6">{item}</p>
                                            })}
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    </div>
                )
            })
        ) : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}
    </div>);
}