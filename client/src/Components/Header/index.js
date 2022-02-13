import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="d-flex align-items-start bg-dark" bg="light" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="fs-1 fw-bold d-flex text-light" to="/">
          Ski Haus
        </Navbar.Brand>
        <Nav className="align-items-end gap-3">
          <Link to="/customerform">Customer Form</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/contract">Contract</Link>
          <Link to="/equipment">Equipment</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
