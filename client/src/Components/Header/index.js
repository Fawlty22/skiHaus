import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="d-flex align-items-start bg-dark" bg="light" expand="lg">
      <Container className="d-flex">
        <Navbar.Brand
          className="fs-1 fw-bold d-flex text-light"
          to="/dashboard"
        >
          <Link
            className="text-info"
            to="/dashboard"
            style={{ textDecoration: "none" }}
          >
            Ski Haus
          </Link>
        </Navbar.Brand>
        <Nav className="align-items-end gap-3">
          <Link
            className="text-info fw-bold"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
