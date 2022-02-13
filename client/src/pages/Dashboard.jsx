<<<<<<< HEAD
import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
// import { QUERY_BOOKS } from '../graphql/queries';
=======
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_EMPLOYEE } from '../graphql/queries';
import { StoreProvider } from '../utils/GlobalContext';
>>>>>>> 59cb32bd0c4ce8f3d9ffc9ff134183f05644f898

const Dashboard = () => {
  
  let employee = Auth.getProfile();
  console.log(employee)

<<<<<<< HEAD
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
=======
  // redirect to login if error in a query, not defined yet
  if (!employee) {
    return <Redirect to={"/login"} />
  }

  return (
    <div>
      {employee ?
        <div>
          <button>
            <Link to="/contract">Create Contract</Link>
          </button>
        </div>
        :
        ''
      }
    </div>
    );
  };
>>>>>>> 59cb32bd0c4ce8f3d9ffc9ff134183f05644f898

export default Dashboard;
