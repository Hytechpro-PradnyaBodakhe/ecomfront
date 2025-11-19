import React from "react";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { Container, Table, Button, Image, Alert } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Cartitems() {
const [auth] = useAuth();
const [cart, setCart] = useCart();

const totalPrice = () => {
return cart.reduce((total, item) => total + item.price, 0);
};

const removeItem = (cid) => {
const updatedCart = cart.filter((item) => item._id !== cid);
setCart(updatedCart);
localStorage.setItem("cart", JSON.stringify(updatedCart));
};

return ( <Container className="py-5"> <div className="text-center mb-4"> <h2 className="fw-bold text-primary">
{auth.token
? `Hello, ${auth.user.name}!`
: "Please log in to view your cart"} </h2> <p className="text-muted">
{cart.length > 0
? `You have ${cart.length} item${cart.length > 1 ? "s" : ""} in your cart`
: "Your cart is empty."} </p> </div>


  {auth.token && cart.length > 0 ? (
    <>
      <Table bordered hover responsive className="align-middle shadow-sm">
        <thead className="table-primary">
          <tr className="text-center">
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((c, i) => (
            <tr key={i} className="text-center">
              <td>
                <Image
                  src={`https://ecombackend-1-12hp.onrender.com/product/product-photo/${c._id}`}
                  alt={c.name}
                  rounded
                  fluid
                  style={{ height: "80px", width: "80px", objectFit: "cover" }}
                />
              </td>
              <td className="fw-semibold">{c.name}</td>
              <td className="text-success fw-bold">
                <FaRupeeSign /> {c.price}
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeItem(c._id)}
                >
                  <MdDelete className="fs-5" /> Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-end fw-bold">
            <td colSpan={2}>Total Amount:</td>
            <td colSpan={2}>
              <span className="text-success">
                <FaRupeeSign /> {totalPrice()}
              </span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </>
  ) : (
    <></>
  )}
</Container>
);
}

export default Cartitems;
