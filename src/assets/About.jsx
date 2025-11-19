import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function About() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left: Image Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Img
                variant="top"
                src="./images/Aboutus.jpg"
                alt="About Us"
                className="img-fluid"
                style={{
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Card>
          </Col>

          {/* Right: Content Section */}
          <Col md={6}>
            <h1 className="fw-bold mb-3 text-primary">About Our Company</h1>
            <p className="text-muted lead">
              Welcome to <span className="fw-semibold text-dark">Online Shopping</span>, 
              your trusted destination for quality products at the best prices. 
              We specialize in providing a seamless shopping experience — 
              from browsing to doorstep delivery.
            </p>

            <p className="text-secondary">
              Our mission is to make online shopping effortless and enjoyable.
              With a dedicated team and a passion for innovation, we bring you
              a curated collection of products that blend style, comfort, and
              value.
            </p>

            <div className="mt-4">
              <Button
                variant="primary"
                className="px-4 py-2 rounded-pill fw-semibold shadow-sm"
              >
                Learn More
              </Button>
              <Button
                variant="outline-secondary"
                className="ms-3 px-4 py-2 rounded-pill fw-semibold"
              >
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>

        {/* Mission & Values Section */}
        <Row className="mt-5 text-center">
          <Col md={4}>
            <Card className="border-0 shadow-sm py-4 rounded-4">
              <Card.Body>
                <h5 className="fw-bold text-primary mb-2">Our Mission</h5>
                <p className="text-muted mb-0">
                  To deliver the best products with exceptional service and
                  reliability.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm py-4 rounded-4">
              <Card.Body>
                <h5 className="fw-bold text-primary mb-2">Our Vision</h5>
                <p className="text-muted mb-0">
                  To be a global leader in eCommerce through innovation and
                  trust.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm py-4 rounded-4">
              <Card.Body>
                <h5 className="fw-bold text-primary mb-2">Our Values</h5>
                <p className="text-muted mb-0">
                  Integrity, Customer Satisfaction, and Quality above all.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
