import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Shuffle from "../assets/playerbuttons/shuffle.png";
import Previous from "../assets/playerbuttons/prev.png";
import Play from "../assets/playerbuttons/play.png";
import Next from "../assets/playerbuttons/next.png";
import Repeat from "../assets/playerbuttons/repeat.png";

const Player = function () {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="row">
        <Col xs={12} className="col-lg-10 offset-lg-1 ">
          <Row className="row ">
            <Col xs={6}>
              <>
                <div className="d-flex  offset-md-1 offset-lg-4 align-items-center mt-1">
                  <img src="" alt="song" className="" style={{ width: "70px" }} />
                  <div className="d-flex flex-column">
                    <p className="fs-5 text-white ms-3 p-0 m-0">Titolo</p>
                    <p className="fs-6 text-white ms-3 p-0 m-0">Artista</p>
                  </div>
                </div>
              </>
            </Col>
            <Col className="col-1 col-md-1 col-lg-1 playerControls mt-1 d-flex ">
              <Row className="row d-flex flex-column flex-nowrap ">
                <div class="d-flex">
                  <a href="#">
                    <img src={Shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={Previous} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={Play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={Next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={Repeat} alt="repeat" />
                  </a>
                </div>
                <div class="progress mt-3">
                  <ProgressBar></ProgressBar>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
