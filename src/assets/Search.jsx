import React from 'react'
import { useSearch } from '../context/search'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRupeeSign } from "react-icons/fa";
import { useCart } from '../context/cart';

function Search() {

  const [values,setValues]=useSearch()
 const [cart,setCart]=useCart()
 
   function addtocart(prod) {
    let e = cart.find((f) => f._id === prod._id);
    if (e) {
      alert("Product already added in the cart")
    } else {
      setCart([...cart, prod]);
      localStorage.setItem("cart", JSON.stringify([...cart, prod]))
    }
  }
  return (
    <div>
      Search keywords
      <h3 className='text-center p-4'>{values?.result.length<1?"Product Not found":`${values.result.length}Product founds`}</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
            values?.result.map((p, i) => {
              return (  
                                                  
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
                        <Button variant="success" className="mt-auto" onClick={() => addtocart(p)}>
                          Add To Cart
                        </Button>
                      </Card.Body>
                    </Card>
                </Col>
              )
            })
            }
          </div>

    </div>
  )
}

export default Search
