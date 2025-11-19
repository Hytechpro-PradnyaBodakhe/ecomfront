import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Adminmenu from "../assets/Adminmenu";

function Users() {
  const [allUsers, setAllUsers] = useState([]);

  function getUsers() {
    fetch("https://ecombackend-1-12hp.onrender.com/auth/allusers")
      .then((res1) => res1.json())
      .then((res2) => {
        console.log(res2);
        setAllUsers(res2.allUsers);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-fluid">
      <Row className="m-4">
        <Col md={3} className="my-4">
          <Adminmenu />
        </Col>

        <Col md={9}>
          <h2 className="text-center mb-4">All Users</h2>
          <Card className="shadow-lg rounded-3">
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered align-middle">
                  <thead className="table-dark text-center">
                    <tr>
                      <th scope="col">Serial No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {allUsers.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Users;
