import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="d-flex align-items-start bg-dark" bg="light" expand="lg">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand className="fs-1 fw-bold d-flex text-info" to="/dashboard">
         <Link to='/dashboard' className="text-info" style={{ textDecoration: 'none' }}>Ski Haus</Link>
        </Navbar.Brand>
        {/* <Nav  className="align-items-end gap-3">
          <Link style={{color: 'pink', textDecoration: 'none'}} to="/customerform">Customer Form</Link>
          <Link style={{color: 'pink', textDecoration: 'none'}} to="/dashboard">Dashboard</Link>
          <Link style={{color: 'pink', textDecoration: 'none'}} to="/login">Login</Link>
          <Link style={{color: 'pink', textDecoration: 'none'}} to="/contract">Contract</Link>
          <Link style={{color: 'pink', textDecoration: 'none'}} to="/equipment">Equipment</Link>
        </Nav> */}
      </Container>
    </Navbar>
  );
};

export default Header;
