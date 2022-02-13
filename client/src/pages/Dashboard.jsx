import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
// import { QUERY_BOOKS } from '../graphql/queries';

const Dashboard = (props) => {
  // const { data, loading, error } = useQuery(QUERY_BOOKS, {
  //   context: {
  //     headers: {
  //       'Authorization': `Bearer ${props.user.token}`
  //     },
  //   },
  //   fetchPolicy: 'no-cache'
  // });

  //redirect to login if error in a query, not defined yet
  //   if (error) {
  //     return <Redirect to={"/login"} />
  //   }

  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Dashboard;
