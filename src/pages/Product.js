import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Image} from 'react-bootstrap';
import '../pages/product.css';

const Product = () => {
    const url = "https://fakestoreapi.com/products";
    const [Products, setProducts] = useState([]);
    const getDataProducts = async () => {
        const response = await fetch(url);
        const DataProduct = await response.json();
        setProducts(DataProduct);
        console.log(Products);
    }
    useEffect(() => {
        getDataProducts();
    },
    );
        return(
            <Container >
            <h1 className="headline">Fashion Olshop</h1>
                <Row md={6} className="p-5" >
                    {Products.map((product) => {
                        return(
                        <Col > 
                        <CardProduct
                        key={product.id}
                        description={product.description}
                        title={product.title}
                        price={product.price}
                        image={product.image}/> 
                        </Col>)
                        })
                    }
                </Row>
            </Container>
        )
    }
    function CardProduct(props) {
        return (
        <Card className="card">
            <div border="primary" className="product">
            <Image variant="top" src={props.image} height="150" width="125" />
            <Card.Body>
            <Card.Title className="text-start title h3" variant = "light" maxlength="20">{props.title}</Card.Title>
            <Card.Title className="text-start text-warning">${props.price}</Card.Title>
            <Button variant="primary">Details</Button>
            </Card.Body>
            </div>
        </Card>

        );
    }

export default Product;