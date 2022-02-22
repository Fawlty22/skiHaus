import React from "react";
import { Link, Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap'

const Dashboard = () => {
  // let employee = Auth.getProfile();
  // console.log(employee);

  //I have commented out the login logic for development purposes.

  // redirect to login if error in a query, not defined yet
  // if (!employee) {
  //   return <Redirect to={"/login"} />
  // }

  return (
    <Container fluid>
      <Row className="dashboard-row">
        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2">
            <Link style={{ textDecoration: "none" }} to="/contract">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Create New Contract
                </Card.Title>
              </Card.Body>{" "}
            </Link>
          </Card>
        </Col>

        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            <Link style={{ textDecoration: "none" }} to="/new-employee">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Create New Employee
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            <Link style={{ textDecoration: "none" }} to="/customerform">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Customer Form
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>

      <Row className="dashboard-row">
        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            <Link style={{ textDecoration: "none" }} to="/equipment">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Equipment Management
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            <Link style={{ textDecoration: "none" }} to="/view-contracts">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  View Contracts
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            {" "}
            <Link style={{ textDecoration: "none" }} to="/user-management">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  User Management
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
      <Row className="dashboard-row">
        <Col xs={12} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            {/* This link will be instead inside a .map() that populates the contracts returning today.  We dont want the whole card to link, just the contract id's.  */}
            <Link style={{ textDecoration: "none" }} to="/returning">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Returning Today
                </Card.Title>
                <ListGroup>
                  <ListGroup.Item style={{background: 'violet'}}>Contract's'</ListGroup.Item>
                  {/* map here to dynamically create the contracts coming back today */}
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );

};

export default Dashboard;
