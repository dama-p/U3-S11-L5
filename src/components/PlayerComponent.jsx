import { Col, Container, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLiked } from "../redux/action";
import Shuffle from "../spotify-start/assets/playerbuttons/shuffle.png"
import Prev from "../spotify-start/assets/playerbuttons/prev.png"
import Play from "../spotify-start/assets/playerbuttons/play.png"
import Next from "../spotify-start/assets/playerbuttons/next.png"
import Repeat from "../spotify-start/assets/playerbuttons/repeat.png"



const PlayerComponent = () => {
  let player = useSelector((state) => state.player.selectedAlbum);
  const dispatch = useDispatch();
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 align-items-center" style={{ justifyContent: player ? "" : "center" }}>
            <Col
              xs={4}
              className=" align-items-center justify-content-center"
              style={{ display: player ? "flex" : "none" }}
            >
              <img src={player?.album.cover_medium} alt="" style={{ width: "70px", height: "70px" }} />
              <Heart
                color="white"
                className="ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(setLiked(player?.title))}
              />
            </Col>

            <Col xs={6} md={4} className="playerControls text-white">
              <div style={{ display: player ? "block" : "none" }}>
                <span className="mb-0 text-center">{player?.artist.name}: </span>
                <span className="mb-0 text-center">{player?.title}</span>
              </div>
              <div className="d-flex">
                <Link to="/">
                  <img src={Shuffle} alt="shuffle" />
                </Link>
                <Link to="/">
                  <img src={Prev} alt="prev" />
                </Link>
                <Link to="/">
                  <img src={Play} alt="play" />
                </Link>
                <Link to="/">
                  <img src={Next} alt="next" />
                </Link>
                <Link to="/">
                  <img src={Repeat} alt="repeat" />
                </Link>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerComponent;
