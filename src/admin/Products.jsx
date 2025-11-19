import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRupeeSign } from "react-icons/fa";
import Adminmenu from "../assets/Adminmenu";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

function getallprods() {
    fetch("https://ecombackend-1-12hp.onrender.com/product/all-products").then((res1) =>{ 
      res1.json().then((res2) => {
        console.log(res2)
        setProducts(res2.products)
      })
  })
  }
  useEffect(() => {
    getallprods()
  }, [])

  return (
    <div className="container-fluid">
      <Row>
        <Col md={3}>
          <Adminmenu />
        </Col>

        <Col md={9}>
          <h2 className="text-center my-3">All Products</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
            products.map((p, i) => {
              return (  
                 <Link
                    to={`/dashboard/admin/UpdateProduct/${p.slug}`} key={p._id}
                    className="product-link w-100">                                      
                <Col key={i}>
                  <Card style={{ height: "200px" }} className="h-100 shadow d-flex">
                      <Card.Img
                        variant="top"
                        src={`https://ecombackend-1-12hp.onrender.com/product/product-photo/${p._id}`}
                        className="p-3"
                        style={{ height: "200px", objectFit: "contain" }}
                      />
                      <Card.Body className="text-center d-flex flex-column">
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text className="flex-grow-1">
                          {p.description}
                        </Card.Text>
                        <Card.Text>
                          <FaRupeeSign /> {p.price}
                        </Card.Text>
                        <Button variant="success" className="mt-auto">
                          Add To Cart
                        </Button>
                      </Card.Body>
                    </Card>
                </Col>
                 </Link>
              )
            })
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Products
