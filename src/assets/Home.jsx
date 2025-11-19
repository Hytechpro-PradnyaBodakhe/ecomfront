import { useEffect, useState } from "react"   
import Row from "react-bootstrap/Row"   
import Col from "react-bootstrap/Col"   
import Button from "react-bootstrap/Button"  
import Card from "react-bootstrap/Card"  
import { FaRupeeSign } from "react-icons/fa"  
import { useCart } from "../context/cart"  
import Form from "react-bootstrap/Form"  

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useCart();
  const [checked, setChecked] = useState([]);

  function getallprods() {
    fetch("https://ecombackend-1-12hp.onrender.com/product/all-products")
      .then((res1) => {
      res1.json().then((res2)=>{
        console.log("FILTER RESPONSE:", res2)
        setProducts(res2.products)  // FIX 3
      })
    })
  }

  useEffect(() => {
    getallprods()
  }, [])

  function getcategories() {
    fetch("https://ecombackend-1-12hp.onrender.com/category/all-categories")
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setCategories(res2.categories);   // FIX 2
      })
  }

  useEffect(() => {
    getcategories()
  }, [])

  function addtocart(prod) {
    let e = cart.find((f) => f._id === prod._id);
    if (e) {
      alert("Product already added in the cart")
    } else {
      setCart([...cart, prod]);
      localStorage.setItem("cart", JSON.stringify([...cart, prod]))
    }
  }

  function handleFilter(value,id) {
    let all=[...checked]
    if(value){
      all.push(id)
    }else{
      all=all.filter(c=>c!==id)
    }
    setChecked(all)
  }

  function filterproduct(){
    let data={checked}
    fetch("https://ecombackend-1-12hp.onrender.com/product/filter-product",{
      method: "post",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(data)
    }).then((res1)=>{
      res1.json().then((res2)=>{
        console.log("FILTER RESPONSE:", res2)
        setProducts(res2.products)  // FIX 3
      })
    })
  }
  useEffect(()=>{
    if (checked.length) 
      filterproduct()
    },[checked])

  return (
    <div className="container-fluid">
      <Row>
        <Col md={3}>
          <h3 className="mb-4">Filter By Category</h3>
          {
          categories.map((c,i)=>{
            return(
              <Form.Check
                type="checkbox"
                label={c.name}
                key={c._id}
                className="mt-5 fs-5"
                onChange={(e)=>handleFilter(e.target.checked,c._id)}/>
            )
          })
          }
<Button variant="secondary" className="px-3 my-5" onClick={()=>window.location.reload()}>Clear Filters</Button>
        </Col>

        <Col md={9}>
          <h2 className="text-center my-3">All Products</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
            products.map((p,i)=>{   // FIX 5
              return(
                <Col key={i}>
                  <Card className="h-100 shadow d-flex flex-column">
                    <Card.Img
                      variant="top"
                      src={`https://ecombackend-1-12hp.onrender.com/product/product-photo/${p._id}`}
                      className="p-3"
                    />
                    <Card.Body className="text-center d-flex flex-column">
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {p.description}
                      </Card.Text>
                      <Card.Text>
                        <FaRupeeSign /> {p.price}
                      </Card.Text>
                      <Button
                        variant="success"
                        className="mt-auto"
                        onClick={() => addtocart(p)}
                      >
                        Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home;

