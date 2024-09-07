import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col md={2} className="mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white text-decoration-none">About Us</a>
            </h6>
          </Col>
          <Col md={2} className="mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white text-decoration-none">Products</a>
            </h6>
          </Col>
          <Col md={2} className="mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white text-decoration-none">Awards</a>
            </h6>
          </Col>
          <Col md={2} className="mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white text-decoration-none">Help</a>
            </h6>
          </Col>
          <Col md={2} className="mb-3">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-white text-decoration-none">Contact</a>
            </h6>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col lg={8} className="mx-auto">
            <p>
              InterviewG envisions a world where hiring is seamless and insightful. Our mission is to empower interviewers with innovative tools, fostering better connections and unlocking the potential of talent.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-facebook" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-twitter" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-google" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-instagram" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="#!" className="text-white me-3">
              <i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i>
            </a>
            <a href="#!" className="text-white">
              <i className="bi bi-github" style={{ fontSize: '20px' }}></i>
            </a>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p className="mb-0">Copyright © InterviewG 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
