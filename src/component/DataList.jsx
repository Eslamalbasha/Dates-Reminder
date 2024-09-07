/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types
import { Row, Col } from "react-bootstrap";

const DataList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-5 ">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                  <img
                    className="img-avatar"
                    src="../../public/p1.jpg"
                    alt="sdsd"
                  />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">{`We don't have appointments`}</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DataList;
