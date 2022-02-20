import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Form, Container, FloatingLabel, Button } from "react-bootstrap";
import SingleUserContracts from "../SingleUserContract";
import { QUERY_USER } from "../../graphql/queries";

const SingleUser = ({}) => {
  const [formState, setFormState] = useState({
    email: "",
  });

  const [userState, setUserState] = useState({ userInfo: "" });

  const [getUser, { data, error }] = useLazyQuery(QUERY_USER);

  const { email } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userResult = await getUser({ variables: { email: email } });

    setUserState({
      ...userState,
      userInfo: userResult.data.username,
    });
  };

  switch (userState.userInfo) {
    case "":
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

    default:
      return <SingleUserContracts userResult={data} />;
  }
};

export default SingleUser;
