import { Col, Container, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFave } from "../redux/action";
import Shuffle from "../spotify-start/assets/playerbuttons/shuffle.png";
import Prev from "../spotify-start/assets/playerbuttons/prev.png";
import Play from "../spotify-start/assets/playerbuttons/play.png";
import Next from "../spotify-start/assets/playerbuttons/next.png";
import Repeat from "../spotify-start/assets/playerbuttons/repeat.png";

const PlayerComponent = () => {
  let playerAlbum = useSelector((state) => state.player.selectedAlbum);
  console.log("PLAYER", playerAlbum);
  const dispatch = useDispatch();
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 align-items-center justify-content-center justify-content-lg-start">
            <Col xs={4} className="d-flex align-items-center justify-content-center">
              {playerAlbum !== null && (
                <>
                  <img src={playerAlbum?.album.cover_medium} alt="" style={{ width: "70px", height: "70px" }} />
                  <Heart
                    color="white"
                    className="mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(addFave(playerAlbum))}
                    id="likedIcon"
                  />
                  <span className="text-white" id="playerText">
                    {playerAlbum?.artist.name}
                    <br />
                    {playerAlbum?.title}
                  </span>
                </>
              )}
            </Col>

            <Col xs={6} md={5} className="playerControls text-white">
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
