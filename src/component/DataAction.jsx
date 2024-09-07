import { Row, Col } from "react-bootstrap";
const DataAction = ({ DeleteData, viewData }) => {
  return (
    <Row className="justify-content-center my-4 ">
      <Col sm="8" className="d-flex justify-content-between ">
        <button onClick={DeleteData} className="btn-style p-2 ">
          Delete
        </button>
        <button onClick={viewData} className="btn-style">
          Display Data
        </button>
      </Col>
    </Row>
  );
};

export default DataAction;
