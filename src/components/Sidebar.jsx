import Logo from "../assets/logo/logo.png";
import { InputGroup, FormControl, Button, Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = function () {
  return (
   
    <Navbar expand="md" fixed="left" className="d-none d-md-flex px-3">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Spotify_Logo" width={131} height={40} className="mt-1 d-flex" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="align-items-baseline">
        <Nav className="flex-column">
          <Link className="nav-link" to="/">
            <i class="bi bi-house-door-fill"></i>&nbsp; Home
          </Link>
          <Link className="nav-link" to="/library">
            <i class="bi bi-book-fill"></i>&nbsp; Your Library
          </Link>
          <InputGroup className="mt-3">
            <FormControl placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            <Button variant="outline-secondary" id="button-addon2">
              GO
            </Button>
          </InputGroup>
        </Nav>
      </Navbar.Collapse>
      <div className="nav-btn">
        <Button className="btn" id="signup-btn">
          Sign Up
        </Button>
        <Button className="btn" id="login-btn">
          Login
        </Button>
        <a>Cookie Policy</a> |<a> Privacy</a>
      </div>
    </Navbar>
    
  );
};

export default Sidebar;
