import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Form, Container, FloatingLabel, Button } from "react-bootstrap";

const SingleUser = ({ userData }) => {
  const [formState, setFormState] = useState({
    email: "",
  });
  const[getUser, { data }] = useLazyQuery()

  const { email } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  
  return (
    <Container>
      <Form id="customerForm" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            defaultValue={email}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default SingleUser;
