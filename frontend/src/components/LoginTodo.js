import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginTodo = () => {
  const Navigate = useNavigate();
  const hostServer = "http://localhost:5000/";
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const onValueChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    // we are using spread operator.. here we merge two object.. into new object..
    // same properties get overwrite
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Details", credentials);

    try {
      const apiEndpoint = "auth/login";
      const url = `${hostServer}${apiEndpoint}`;

      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // here i will redirect to todopage
        console.log("Hurrah");
        localStorage.setItem("Auth_Token", json.Auth_Token); // here i am storing the authtoken in local storage
        Navigate("/"); /// we will use this for navigation
      } else {
        console.log("Try Again");
        alert("Try Again Dear");
      }
    } catch (error) {
      console.error(`Sign In Error: ${error.message}`);
    }
  };
  return (
    <div className="container mx-3">
      <Form onSubmit={handleSubmit}>
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
            minLength={5}
            required
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

export default LoginTodo;
