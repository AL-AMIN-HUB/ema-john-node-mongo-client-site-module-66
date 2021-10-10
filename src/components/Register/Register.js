import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-3 text-center">
      <h1>Create Account</h1>
      <Form className="w-25 mx-auto">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Enter your e-mail" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Re-enter Password:
          </Form.Label>
          <Col sm="8">
            <Form.Control type="password" placeholder="confirm password" />
          </Col>
        </Form.Group>
        <Button variant="success" className="fs-5 px-3 mb-3" type="submit">
          SUBMIT
        </Button>
      </Form>
      <p>
        Already have an Account? <NavLink to="/login">Log in</NavLink>
        <div>----------- or -------------</div>
        <button className="btn btn-outline-primary fs-5">Google Sign In</button>
      </p>
    </div>
  );
};

export default Register;
