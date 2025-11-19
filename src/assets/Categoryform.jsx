import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Categoryform({ handleSubmit, value, setValue }) {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <Card className="shadow-lg p-4 rounded-4" style={{ width: "450px" }}>
        <Card.Body>
          <h2 className="text-center mb-4 text-primary fw-bold">
            Handle Category
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="fw-semibold">Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="py-2"
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg" className="fw-semibold">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Categoryform;
