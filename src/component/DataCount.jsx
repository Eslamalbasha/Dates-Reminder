import { Row, Col } from "react-bootstrap";

const DataCount = (person) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        You have {person.length} appointments today
      </Col>
    </Row>
  );
};

export default DataCount;
