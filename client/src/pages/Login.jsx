import React, { useState, useEffect, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { Card, Container, Row, Col } from "react-bootstrap";
import { LOGIN_MUTATION } from "../graphql/mutations";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalContext";
import useEmployeeReducer from "../utils/reducers";
import { UPDATE_EMPLOYEE } from "../utils/actions";

function Login(props) {
  const [state, dispatch] = useStoreContext();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const { token, employee } = mutationResponse.data.login;
      console.log(token, "line 20 login");
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: { token: token, _id: employee._id },
      });
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect(() => {
  //     if (data && data.login) {
  //         props.setEmployee({ token: data.login.token, employee: data.login.author });
  //     }
  // }, [data]);

  return (
   
    <Container>
      <Row className="d-flex justify-content-center align-items-center h-50 mt-5">
        <Col xs={10} md={6} >
          <Card bg="dark" className="p-3 text-info">
            <form onSubmit={handleFormSubmit}>
              <h3 className="text-center">
                Welcome to the Ski Haus! 
              </h3>
              <h5 className="text-center">
              Please Sign in Below:
              </h5>

              <div className="form-group p-2">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group p-2">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="*******"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              {error ? (
                <div>
                  <p>The provided credentials are incorrect</p>
                </div>
              ) : null}
              <div className="d-flex justify-content-end mt-1">
                <button type="submit" className="btn btn-info btn-lg btn-block">
                  Sign in
                </button>
              </div>
            </form>
          </Card>
          <Card bg="dark" className="p-3 text-info mt-3">
          <h5 className="text-center">
              For testing purposes, use the following login credentials: <br />
              Usename: guest | Password: password
              </h5>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
