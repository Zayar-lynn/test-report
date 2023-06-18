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
import { Link, Redirect } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [validity, setValidity] = useState({
    email: true,
    password: true
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    if (formData.email && formData.password === "password") {
      setLoggedIn(true);
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    switch (name) {
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

  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Row className="justify-content-center">
      <Col sm="12" md="3">
        <div className="text-center pb-3">
          <h3 className="pt-5">Login Form</h3>
        </div>
        <Form className="text-center" onSubmit={handleSubmit}>
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
            Login
          </Button>

          <p className="mt-2 text-muted">
            Not registered yet?{" "}
            <Link to="/register" className="text-primary">
              Click here to register.
            </Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
