import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";

const CustomerForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    birthDate: "",
    email: "",
    phone: "",
  });

  const { firstName, lastName, birthDate, email, phone, username, password } =
    formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Container>
      <Form id="customerForm" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            name="firstName"
            type="text"
            placeholder="First Name"
            defaultValue={firstName}
            onChange={handleChange}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Last Name"
            defaultValue={lastName}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="username"
          className="mb-3"
        >
          <Form.Control
            name="username"
            type="text"
            placeholder="User Name"
            defaultValue={username}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="password"
          className="mb-3"
        >
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            defaultValue={password}
            onChange={handleChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Birth Date"
          className="mb-3"
        >
          <Form.Control
            name="birthDate"
            type="date"
            placeholder="Birth Date"
            defaultValue={birthDate}
            onChange={handleChange}
          />
        </FloatingLabel>
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
        <FloatingLabel
          controlId="floatingInput"
          label="Phone Number"
          className="mb-3"
        >
          <Form.Control
            name="phone"
            type="tel"
            placeholder="Phone Number"
            defaultValue={phone}
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

export default CustomerForm;
