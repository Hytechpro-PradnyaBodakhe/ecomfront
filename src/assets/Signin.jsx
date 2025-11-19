import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../context/auth'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container'
import { Link, useNavigate } from 'react-router-dom';


function Signin() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [auth,setAuth]=useAuth()
  let navigate=useNavigate()
  function loginuser(e)
  {
    e.preventDefault()
    let u={email,password}
    fetch("https://ecombackend-1-12hp.onrender.com/auth/login",
      {
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(u)
      }).then((res1)=>{
        res1.json().then((res2)=>{
         console.log(res2)
         alert("User logged in successfully")
         setAuth({
          user:res2.user,
          token:res2.token
         })
         localStorage.setItem("auth",JSON.stringify(res2))
         navigate('/')
        })
      })
    
  
  }
  return (
    <div>

      <Container className='text-center'>
      <h2 className='text-center my-4'>Sign In Form</h2>
      <Form onSubmit={loginuser} className='w-25 mx-auto d-block'>
        <Form.Group className="mb-3" controlId="formGroupEmail">
         
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          
          <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
      </Button>

<Link to="/forgotpass" className='ms-4 text-secondary text-decoration-none'>Forgot password</Link>
      </Form>
</Container>

    </div>
  )
}

export default Signin
