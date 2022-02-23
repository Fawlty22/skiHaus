import React from "react";
import { Redirect } from "react-router-dom";
import { Container, ListGroup, H2 } from "react-bootstrap";
import SingleUser from "../components/SingleUser";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_USERS_CONTRACTS } from "../graphql/queries";

const UserSearch = () => {
  const { data, error, loading } = useQuery(QUERY_USERS_CONTRACTS);

  let employee = Auth.getProfile();

  // redirect to login if valid token is not present
  if (!employee) {
    return <Redirect to={"/login"} />;
  }

  if (loading) {
    return <ListGroup.Item>Loading please wait...</ListGroup.Item>;
  }

  if (data) {
    const userData = data.users;

    return (
      <Container id="contractListContainer">
        <SingleUser userData={userData} />
      </Container>
    );
  }
};
export default UserSearch;
