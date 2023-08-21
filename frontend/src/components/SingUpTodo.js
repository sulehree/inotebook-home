import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const SingUpTodo = (props) => {
  const Navigation = useNavigate();
  const hostServer = process.env.REACT_APP_HOST_URL;
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onValueChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    // we are using spread operator.. here we merge two object.. into new object..
    // same properties get overwrite
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiEndpoint = "auth/signup";
      const url = `${hostServer}${apiEndpoint}`;
      console.log("credentials are", credentials);
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": process.env.REACT_APP_CTJSON,
        },

        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      console.log(json);
      console.log(json.success);
      if (json.success) {
        props.showalert(
          `A User with email ${credentials.email} has successfully created`,
          "success"
        );
        Navigation("/");
      } else {
        props.showalert(`Signup Error: ${json.error}`, "danger");
      }
    } catch (error) {
      console.log();
      props.showalert(`Signup Error: ${error.message}`, "danger");
    }
  };
  return (
    <div className="container mx-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Enter Your Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            minLength={5}
            required
            onChange={onValueChange}
            value={credentials.name}
            placeholder="Your Name:"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={onValueChange}
            value={credentials.email}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={onValueChange}
            value={credentials.password}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="Checkbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SingUpTodo;
