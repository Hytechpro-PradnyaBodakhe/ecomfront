import React from "react";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Cartitems() {
  const [auth] =useAuth()
  const [cart,setCart] =useCart()

  const totalprice=()=>{
    let total =0
    cart.map(item=>{total=total+item.price})
    return total
  }
  function removeitem()
  {
    let myCart=[...cart]
    let index=myCart.findIndex(item=>item._id===cid)
    myCart.splice(index,1)
    setCart(myCart)
    localStorage.setItem("cart",JSON.stringify(myCart))
  }
  
  return (
    <Container className="p-4 text-center">
     <h1>{auth.token ? `Hello ${auth.user.name}` :"please login to check products in cart"}</h1>
     <h3>{cart.length>1 ? `You have ${cart.length} product in cart`:"Please add products in the cart"}</h3>
     {
      auth.token?<>
      <table className="table">
      <thead>
        <tr><th>Products</th><th>Product Name</th><th>Product Price</th><th>Remove Product</th></tr>
      </thead>
      <tbody>
        {
          cart.map((c,i)=>{
            return (
              <tr key={i}>
                <td><img src={`https://ecombackend-1-12hp.onrender.com/product/product-photo/${c._id}`} className=" mx-auto d-block img-fluid" height={100} width={100}/></td>
                <td>{c.name}</td>
                <td>  <FaRupeeSign />{c.price}</td>
                <td><MdDelete  className="text-danger fs-3" onClick={()=>removeitem(c._id)}/></td>
              </tr>

            )
          })
        }
      </tbody>
      <tfoot>
        <tr><td colSpan={2}>Total Amount : </td><td colspan={2}>{totalprice()}</td></tr>
      </tfoot>
      </table>
      </>:null
     }
    </Container>
  );
}

export default Cartitems;






////old code end ///



///start new cdode//

import React from "react";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { Container } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Cartitems() {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();

  // Calculate total price safely
  const totalPrice = () => {
    return cart.reduce((total, item) => total + (item.price || 0), 0);
  };

  // Remove product from cart
  const removeItem = (cid) => {
    const updatedCart = cart.filter((item) => item._id !== cid);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Container className="p-4 text-center">
      <h1>
        {auth?.token
          ? `Hello ${auth?.user?.name || "User"}`
          : "Please login to check products in your cart"}
      </h1>

      <h3 className="mb-4">
        {cart.length > 0
          ? `You have ${cart.length} product${cart.length > 1 ? "s" : ""} in your cart`
          : "Your cart is empty"}
      </h3>

      {auth?.token && cart.length > 0 && (
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c) => (
              <tr key={c._id}>
                <td>
                  <img
                    src={`https://ecombackend-1-12hp.onrender.com/product/product-photo/${c._id}`}
                    alt={c.name}
                    className="mx-auto d-block img-fluid rounded"
                    height={100}
                    width={100}
                  />
                </td>
                <td>{c.name}</td>
                <td>
                  <FaRupeeSign /> {c.price}
                </td>
                <td>
                  <MdDelete
                    className="text-danger fs-3 cursor-pointer"
                    onClick={() => removeItem(c._id)}
                    title="Remove product"
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="text-end fw-bold">
                Total Amount:
              </td>
              <td colSpan={2} className="fw-bold">
                <FaRupeeSign /> {totalPrice().toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </Container>
  );
}

export default Cartitems;
