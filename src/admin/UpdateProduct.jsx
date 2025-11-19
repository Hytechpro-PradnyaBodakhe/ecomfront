import { useState, useEffect } from "react";
import Adminmenu from "../assets/Adminmenu";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import { useAuth } from "../context/auth";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() 
{
  const [categories,setCategories]=useState([])
  const [category,setCategory]=useState("")
  const [name,setName]=useState("")
  const [price,setPrice]=useState("")
  const [quantity,setQuantity]=useState("")
  const [description,setDescription]=useState("")
  const [photo,setPhoto]=useState("")
  const [id,setId]=useState(null)
  const params=useParams()
  console.log(params)
  const [auth]=useAuth()
  let navigate=useNavigate()

  function getcategories() {
    fetch("https://ecombackend-1-12hp.onrender.com/category/all-categories").then((res1) => {
      res1.json().then((res2)=>{
        console.log(res2)
        setCategories(res2.categories)
      })
    })
  }
  useEffect(() => {
    getcategories()
  },[])

 function getsingleprod(){
  fetch(`https://ecombackend-1-12hp.onrender.com/product/single-product/${params.slug}`).then((res1)=>{
    res1.json().then((res2)=>{
      console.log(res2)
        setName(res2.products.name)
        setPrice(res2.products.price)
        setQuantity(res2.products.quantity)
        setDescription(res2.products.description)
        setId(res2.products._id)
        setCategory(res2.products.category._id)
    })
  })
}
  useEffect(()=>{
    getsingleprod()
  },[])


function delprod(id)
{
   fetch(`https://ecombackend-1-12hp.onrender.com/product/delete-product/${id}`,{
  method: "delete",
  headers:{
    "authorization":auth?.token
   }
   }).then((res1)=>{
    res1.json().then((res2)=>{
      console.log(res2)
      navigate('/dashboard/admin/products')

    })
   })
  }

  function editprod(e)
  {
    e.preventDefault()
    let prod=new FormData()
    prod.append("name",name)
    prod.append("price",price)
    prod.append("quantity",quantity)
    prod.append("description",description)
    prod.append("category",category)
    prod.append("photo",photo)

    console.log(prod)

  fetch(`https://ecombackend-1-12hp.onrender.com/product/update-product/${id}`,{
  method: "put",
  headers:{
    "authorization":auth?.token
  },
  body:prod
}).then((res1)=>{
      res1.json().then((res2)=>{
        console.log(res2)
        navigate('/dashboard/admin/products')
      })
    })
  }
  return(
    <div className="container-fluid">
        <Row>
          <Col md={3}>
            <Adminmenu />
          </Col>
          <Col md={9}>
            <form className="w-50 mx-auto d-block my-4 text-center" onSubmit={editprod}>
              <h3 className="text-center my-3">Update Product</h3>
              <Form.Select aria-label="Default select example" className="mb-3" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option>--Select Category---</option>
                {
                categories.map((c,i)=>{
                  return( 
                  <option key={i} value={c._id}>{c.name}</option>)
              })
            }
              </Form.Select>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Enter product" value={name} onChange={(e)=>setName(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control type="text" placeholder="Enter price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Control type="text" placeholder="Enter Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Control type="file" name='photo' accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])}/>
              </Form.Group>
<Button variant="primary" type="submit" className="my-3">Edit Product</Button>
<Button variant="danger" className="my-3 ms-3" onClick={()=>delprod(id)
}>Delete Product</Button>
            
            </form>
          </Col>
        </Row>
       </div>
  )
}

export default UpdateProduct
