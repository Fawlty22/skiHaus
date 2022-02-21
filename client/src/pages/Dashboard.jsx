import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import {Card, Container, Row, Col } from "react-bootstrap";
import ReturningToday from "../components/ReturningToday"

const Dashboard = () => {
  let employee = Auth.getProfile();
  console.log(employee);

   







  //I have commented out the login logic for development purposes.

  // // redirect to login if error in a query, not defined yet
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
                <Card.Title className="text-info">
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
                <Card.Title className="text-info">
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
                <Card.Title className="text-info">
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
                <Card.Title className="text-info">
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
                <Card.Title className="text-info">
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
                <Card.Title className="text-info">
                  User Management
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
      <Row className="dashboard-row">
        <Col xs={12} md={4} className="dashboard-col">
          <ReturningToday />
        </Col>
      </Row>
    </Container>
  );

};

export default Dashboard;
