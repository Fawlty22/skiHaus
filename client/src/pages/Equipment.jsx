import { Card, Button, ListGroup } from "react-bootstrap";
import AddSkiModal from "../components/AddSkiModal";
import AddSnowboardModal from "../components/AddSnowboard";
import AddBootModal from "../components/AddBootModal";
import React from "react";
import css from "../equipment.css";
import EquipmentList from "../components/EquipmentList";
import { EquipmentProvider } from "../utils/EquipmentContext";

const Equipment = () => {
  const [skimodalShow, setSkiModalShow] = React.useState(false);
  const [snowboardmodalShow, setSnowboardModalShow] = React.useState(false);
  const [bootmodalShow, setBootModalShow] = React.useState(false);

  return (
    <Card id="equipmentCard" className="text-center">
      <Card.Header>Currently Logged In: </Card.Header>
      <Card.Body className="d-flex justify-content-between flex-column gap-3">
        <Card.Title>What Equipment Item Would You Like To Add?</Card.Title>
        <Button variant="primary" onClick={() => setSkiModalShow(true)}>
          Add Skis
        </Button>
        <AddSkiModal
          show={skimodalShow}
          onHide={() => setSkiModalShow(false)}
        />
        <Button variant="primary" onClick={() => setSnowboardModalShow(true)}>
          Add SnowBoard
        </Button>
        <AddSnowboardModal
          show={snowboardmodalShow}
          onHide={() => setSnowboardModalShow(false)}
        />
        <Button variant="primary" onClick={() => setBootModalShow(true)}>
          Add Boots
        </Button>
        <AddBootModal
          show={bootmodalShow}
          onHide={() => setBootModalShow(false)}
        />
      </Card.Body>
      <Card.Body>
        <Card.Title>View Current Inventory Below</Card.Title>
        {/* <EquipmentProvider>
          <EquipmentList />
        </EquipmentProvider> */}
      </Card.Body>
    </Card>
  );
};

export default Equipment;
