import "./style.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Auth from "../../utils/auth";
import "./style.css";

const Header = () => {
  if (!Auth.loggedIn()) {
    return (
      <Navbar
        className="d-flex align-items-start bg-dark"
        bg="light"
        expand="lg"
      >
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="fs-1 fw-bold d-flex text-light" to="/login">
            <Link to="/login" style={{ textDecoration: "none", color: "pink" }}>
              Ski Haus
            </Link>
          </Navbar.Brand>

          <Col xs={12} md={4} className="dashboard-col">
            <Card bg="dark" style={{ width: "18rem" }}>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Card.Body className="text-center">
                  <Card.Title style={{ color: "violet", fontSize: "1.70rem" }}>
                    Employee Log In
                  </Card.Title>
                </Card.Body>{" "}
              </Link>
            </Card>
          </Col>
        </Container>
      </Navbar>
    );
  } else if (Auth.loggedIn()) {
    return (
      <Navbar
        className="d-flex align-items-start bg-dark"
        bg="light"
        expand="lg"
      >
        <Container className="d-flex justify-content-center">
          <Navbar.Brand
            className="fs-1 fw-bold d-flex text-light"
            to="/dashboard"
          >
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "pink" }}
            >
              Ski Haus
            </Link>
          </Navbar.Brand>

          <Col xs={12} md={4} className="dashboard-col">
            <Card bg="dark" style={{ width: "18rem" }}>
        
                <Card.Body className="text-center">
                  
                    <Card.Link style={{ color: "violet" }} href="/" onClick={() => Auth.logout()}>
                      Logout
                    </Card.Link>
              
                </Card.Body>{" "}
            </Card>
          </Col>
        </Container>
      </Navbar>
    );
  }
};

export default Header;
