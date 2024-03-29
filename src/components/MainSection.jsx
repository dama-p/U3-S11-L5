import { Row, Col } from "react-bootstrap";

const MainSection = function () {
  return (
    <>
      
        <Row>
        <Col>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></Row>
          </div>
        </Col>
      </Row>
      
    </>
  );
};

export default MainSection;
