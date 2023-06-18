import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  FormInput,
  Button
} from "shards-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [validity, setValidity] = useState({
    username: true,
    email: true,
    password: true
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setValidity({ ...validity, username: value !== "" });
        break;
      case "email":
        setValidity({
          ...validity,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        });
        break;
      case "password":
        setValidity({ ...validity, password: value.length > 6 });
        break;
      default:
        break;
    }
  };

  return (
    <Row className="justify-content-center">
      <Col sm="12" md="3">
        <div className="text-center pb-3">
          <h3 className="pt-5">Register Form</h3>
        </div>
        <Form className="text-center" onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput
              placeholder="Enter Your Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              invalid={!validity.username}
            />
            <FormFeedback>The username is required.</FormFeedback>
          </FormGroup>

          <FormGroup>
            <FormInput
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              invalid={!validity.email}
            />
            <FormFeedback>Email is invalid.</FormFeedback>
          </FormGroup>

          <FormGroup>
            <FormInput
              placeholder="Enter Your Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              invalid={!validity.password}
            />
            <FormFeedback>Password is weak.</FormFeedback>
          </FormGroup>

          <Button
            theme="primary"
            className="mt-3 mb-2 mr-1"
            style={{ width: "100%" }}
            type="submit"
          >
            Register
          </Button>

          <p className="mt-2 text-muted">
            <Link to="/login" className="text-primary">
              Click here to login.
            </Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
