import Container from "react-bootstrap/Container"   
import Row from "react-bootstrap/Row"   
import Col from "react-bootstrap/Col"   
import Adminmenu from "../assets/Adminmenu"   
import Categoryform from "../assets/Categoryform"   
import { useEffect, useState } from "react"   
import { useAuth } from "../context/auth"   
import Button from "react-bootstrap/Button"   
import Modal from "react-bootstrap/Modal"   
import Card from "react-bootstrap/Card"   

function CreateCategory() {
  const [name, setName] = useState("")   
  const [categories, setCategories] = useState([])   
  const [auth] = useAuth()   
  const [show, setShow] = useState(false)   
  const handleClose = () => setShow(false)   
  const handleShow = () => setShow(true)   
  const [selected, setSelected] = useState(null)   
  const [updatedName, setUpdatedName] = useState("")   

  function getcategories() {
    fetch("https://ecombackend-1-12hp.onrender.com/category/all-categories").then((res1) => {
      res1.json().then((res2) => {
        console.log(res2)   
        setCategories(res2.categories)   
      })   
    })   
  }

  useEffect(() => {
    getcategories()   
  }, [])   

  function handleSubmit(e) {
    e.preventDefault()   
    let data = { name }   
    fetch("https://ecombackend-1-12hp.onrender.com/category/create-category", {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: auth?.token,
      },
      body: JSON.stringify(data),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2)   
        setName("")   
        getcategories()      
      })   
    })   
  }

  function handleUpdate(e) {
    e.preventDefault()   
    let data = { name: updatedName }   
    fetch(`https://ecombackend-1-12hp.onrender.com/category/update-category/${selected._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: auth?.token,
      },
      body: JSON.stringify(data),
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2)   
        setSelected(null)   
        setUpdatedName("")   
        setShow(false)   
        getcategories()   
      })   
    })   
  }

  function handleDelete(id) {
    fetch(`https://ecombackend-1-12hp.onrender.com/category/delete-category/${id}`, {
      method: "delete",
      headers: {
        "content-type": "application/json",
        authorization: auth?.token,
      },
    }).then((res1) => {
      res1.json().then((res2) => {
        console.log(res2)   
        getcategories()   
      })   
    })   
  }

  return (
    <div className="container-fluid">
      <Row className="m-4">
        <Col md={3}>
          <Adminmenu />
        </Col>

        <Col md={9}>
          <Card className="shadow-lg rounded-4 p-4 mb-4">
            <Categoryform
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </Card>

          <Card className="shadow-lg rounded-4 p-4">
            <h3 className="text-center mb-4 text-primary fw-bold">
              All Categories
            </h3>
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered align-middle">
                <thead className="table-dark text-center">
                  <tr>
                    <th scope="col">Serial No</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {categories.map((c, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{c.name}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-2">
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => {
                                handleShow()   
                                setUpdatedName(c.name)   
                                setSelected(c)   
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDelete(c._id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )   
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Update Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Categoryform
            value={updatedName}
            setValue={setUpdatedName}
            handleSubmit={handleUpdate}
          />
        </Modal.Body>
      </Modal>
    </div>
  )   
}

export default CreateCategory   
