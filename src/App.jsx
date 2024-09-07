import { Container } from "react-bootstrap";
import { person } from "./data";
import DataCount from "./component/DataCount";
import DataList from "./component/DataList";
import DataAction from "./component/DataAction";
import { useEffect, useState } from "react";

function App() {
  const [personData, setPersonData] = useState(person);
  useEffect(() => {
    setPersonData([]);
  }, []);
  const onDelete = () => {
    setPersonData([]);
  };
  const viewData = () => {
    setPersonData(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-5 ">
        <DataCount person={personData} />
        <DataList person={personData} />
        <DataAction DeleteData={onDelete} viewData={viewData} />
      </Container>
    </div>
  );
}

export default App;
