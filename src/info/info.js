import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
export default function Info(){
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);
    
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
        <div>
        <div className="container-fluid d-flex m-5">
        <div className="w-50 h-100 p-5">
            <h1 className="mt-5">Discover the Power of Flexi Disc Products</h1>
            <p className="mt-5">Experience fast and effective pain relief with our innovative Flexi Disc products. Say goodbye to discomfort and hello to a pain-free life.</p>
            <button className="bg-background me-3">Shop Now</button>
            <button className="bg-background">Learn More</button>
        </div>
        <div className="w-50">
            {products.length > 0 ? 
            (<Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
                {
                    products[0].image.map((imag,i) =>{
                        return (
                            <Carousel.Item>
                                <img key={i} className="d-block m-auto p-auto" width='475' height='600' src={imag}/>
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
        </div>
        </div>
        <div className="container-fluid d-flex m-5">
        <div className="w-50 h-100 p-5">
            <h1 className="mt-5">Discover the Power of Our Pain Relief Patch for Fast and Effective Relief</h1>
            <p className="mt-5">Our Pain Relief Patch is specially formulated to provide fast and effective relief from pain. With its unique blend of ingredients, it targets the source of the pain and provides long-lasting relief.</p>
        </div>
        <div className="w-50">
            {products.length > 0 ? 
            (<Carousel data-bs-theme="dark" activeIndex={index1} onSelect={handleSelect1}>
                {
                    products[1].image.map((imag,i) =>{
                        return (
                            <Carousel.Item>
                                <img key={i} className="d-block m-auto p-auto" width='475' height='600' src={imag}/>
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
        </div>
        </div>

    </div>);
}