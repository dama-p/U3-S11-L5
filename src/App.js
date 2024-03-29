import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import MyNavbar from "./components/MyNavbar";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Sidebar />

          <Col className="col-12 col-md-11 offset-md-2 offset-lg-3 mainPage">
            <MyNavbar />
            <Routes>
              <Route path="/" element={<MainSection />} />
            </Routes>
            <Player />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
