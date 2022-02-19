import { Form, Button, Container, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADDUSER_MUTATION } from "../graphql/mutations.js";

const CustomerForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    birthDate: "",
    email: "",
    phone: "",
  });

  const { firstName, lastName, birthDate, email, phone, username } = formState;

  const [addUser, { error }] = useMutation(ADDUSER_MUTATION);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = await addUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          birthDate: birthDate,
          email: email,
          phone: phone,
          username: username,
        },
      });
      console.log(newUser);
    } catch (e) {
      console.log(e);
    }
  };

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
