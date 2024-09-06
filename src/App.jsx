import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="font color-body">
      <Container className="py-5 ">
        <Row className="justify-content-center">
          <Col sm="8" className="">
            You have 5 appointments today
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle"></div>
          </Col>
        </Row>
        <Row className="justify-content-center my-4 ">
          <Col sm="8" className="d-flex justify-content-between ">
            <button className="btn-style p-2 ">Delete</button>
            <button className="btn-style">Display Data</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
