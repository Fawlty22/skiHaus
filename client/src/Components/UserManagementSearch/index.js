import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../../graphql/queries";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";

const UserManagementSearch = ({
  userInfo,
  setUserInfo,
  setUserFound,
  setEditUserFormState,
}) => {
  const [formState, setFormState] = useState({ email: "" });
  const [getUser, { data, error }] = useLazyQuery(QUERY_USER);
  const [inputError, setInputError] = useState(false);
  const [queryError, setQueryError] = useState(false);

  const handleUserSearch = async (event) => {
    event.preventDefault();

    if (!formState.email) {
      setInputError(true);
      return;
    }
    const userResult = await getUser({ variables: { email: formState.email } })
      .then((res) => {
        if (!res.data.user) {
          setQueryError(true);
          return;
        }
        setUserInfo(res.data.user);
        setUserFound(true);
        setEditUserFormState(res.data.user);
        setFormState({ email: "" });
        setInputError(false);
        setQueryError(false);
      })
      .catch();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className="text-center fw-bold">
        Customer Search
      </h2>
      <form
        onSubmit={handleUserSearch}
        className="d-flex justify-content-between"
      >
        <Container>
          <Row className="my-2 w-100">
            <Col xs={12} sm={4}>
              <label className="" htmlFor="email">
                Please Enter a Customer's <br/>Email Address:
              </label>
            </Col>

            <Col xs={12} sm={6} >
              <input
                className="form-control"
                placeholder="Email here..."
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </Col>

            <Col sm={2}>
              <Button variant="info" className="" type=" submit">
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </form>

      {queryError && (
        <Alert
          variant="warning"
          onClose={() => setQueryError(false)}
          dismissible
        >
          <span>User Not Found. Please try again</span>
        </Alert>
      )}
      {inputError && (
        <Alert
          variant="warning"
          onClose={() => setInputError(false)}
          dismissible
        >
          <span>Please Enter an Email Address</span>
        </Alert>
      )}
    </div>
  );
};

export default UserManagementSearch;
