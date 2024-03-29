import { Container, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFave } from "../redux/action";

const LibraryComponent = function () {
  const favouriteList = useSelector((state) => {
    return state.favourites.content;
  });

  const dispatch = useDispatch();

  return (
    <Container className="mt-5" id="favouriteStyle">
      <Row className="d-flex justify-content-center mx-auto">
        <Col className="col-9">
          <Link to={"/"}>
            <Button id="signup-btn">Back</Button>
          </Link>
        </Col>

        {favouriteList.map((obj, index) => {
          console.log(favouriteList);
          console.log("OGGETTO", obj.album.cover_small);
          return (
            <>
              <Col className="d-flex col-9 align-items-center gap-2 my-2">
                <img src={obj.album.cover_small}></img>
                {obj.title}
                <Button
                  className="ms-auto"
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFave(index));
                  }}
                >
                  {" "}
                  Remove
                </Button>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default LibraryComponent;
