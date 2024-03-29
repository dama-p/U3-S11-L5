import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../spotify-start/assets/logo/logo.png"

import searching from "../redux/action";

const SidebarComponent = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchField.value;
    dispatch(searching(inputValue));
  };
  return (
  
        <Col xs={2}>
          <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
            <Container className="flex-column align-items-start">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Spotify Logo" width="131" height="40" />
              </Link>
              <Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <Link className="nav-item nav-link d-flex align-items-center" to="/">
                        <HouseDoorFill style={{ width: "24px", height: "36px" }} />
                        &nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item nav-link d-flex align-items-center" to="/library">
                        <BookFill style={{ width: "24px", height: "36px" }} />
                        &nbsp; Your Library
                      </Link>
                    </li>
                    <li>
                      <form className="input-group mt-3" onSubmit={handleSearch}>
                        <input
                          type="text"
                          className="form-control"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          onChange={(e) => dispatch(searching(e.target.value))}
                        />
                        <div className="input-group-append">
                          <Button className="btn btn-outline-secondary bg-black btn-sm h-100" type="submit">
                            GO
                          </Button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
            <div className="nav-btn">
              <Button className="btn signup-btn" type="button">
                Sign Up
              </Button>
              <Button className="btn login-btn" type="button">
                Login
              </Button>
              <div>
                <Link to="/">Cookie Policy</Link> |<Link to="/"> Privacy</Link>
              </div>
            </div>
          </nav>
        </Col>
        
    
  );
};

export default SidebarComponent;
