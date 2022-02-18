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
    
      <Container fluid >
        <Row className="dashboard-row" >
          <Col xs={4} md={4} className="dashboard-col">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
              <Card.Title>
                  <Link to='/contract'>Create A New Contract</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} md={4} className="dashboard-col">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
              <Card.Title>
                  <Link to='/new-employee'>Create New Employee</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} md={4} className="dashboard-col">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
                <Card.Title>
                <Link to='/customerform'>Customer Form</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="dashboard-row" >
          <Col xs={4} md={4} className="dashboard-col">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
              <Card.Title>
                  <Link to='/equipment'>Equipment Management</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} md={4} className="dashboard-col">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
              <Card.Title>
                  <Link to='/returning'>Returning Today</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={4} md={4} className="dashboard-col">
            <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
              <Card.Title>
                  <Link to='/user-management'>User Management</Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="dashboard-row" >
        <Col xs={4} md={4} className="dashboard-col">
          <Card style={{ width: "18rem" }}>
              <Card.Body className="text-center">
              <Card.Title>
                  <Link to='/view-contracts'>View Contracts</Link>
                </Card.Title>
              </Card.Body>
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
  //           <Link to="/contract">Create Contract</Link>
  //         </button>
  //       </div>
  //       :
  //       ''
  //     }
  //   </div>
  //   );
};

export default Dashboard;
