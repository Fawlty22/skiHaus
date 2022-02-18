import React from "react";
import { Redirect, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { StoreProvider } from "../utils/GlobalContext";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = () => {
  let employee = Auth.getProfile();
  console.log(employee);

  // // redirect to login if error in a query, not defined yet
  // if (!employee) {
  //   return <Redirect to={"/login"} />
  // }

  return (
    <Container fluid>
      <Row className="dashboard-row">
        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
            <Link style={{ textDecoration: "none" }} to="/contract">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Create A New Contract
                </Card.Title>
              </Card.Body>{" "}
            </Link>
          </Card>
        </Col>

        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
            <Link style={{ textDecoration: "none" }} to="/new-employee">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Create New Employee
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
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
        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
            <Link style={{ textDecoration: "none" }} to="/equipment">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Equipment Management
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
            <Link style={{ textDecoration: "none" }} to="/returning">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Returning Today
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
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
        <Col xs={4} md={4} className="dashboard-col">
          <Card bg="dark" style={{ width: "18rem" }}>
            <Link style={{ textDecoration: "none" }} to="/view-contracts">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  View Contracts
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );

  // return (
  //   <div>
  //     {employee ?
  //       <div>
  //         <button>
  //           <Link style={{ textDecoration: 'none' }} to="/contract">Create Contract</Link>
  //         </button>
  //       </div>
  //       :
  //       ''
  //     }
  //   </div>
  //   );
};

export default Dashboard;
