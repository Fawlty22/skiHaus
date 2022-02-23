import React from "react";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import SingleUser from "../components/SingleUser";
import Auth from "../utils/auth";

const UserSearch = () => {
  let employee = Auth.getProfile();

  // redirect to login if valid token is not present
  if (!employee) {
    return <Redirect to={"/login"} />;
  }
  return (
    <Container id="contractListContainer">
      <SingleUser />
    </Container>
  );
};
export default UserSearch;
