import React from "react";
import { Card, Button } from "react-bootstrap";
import { AddSkiModal, AddSnowboardModal, AddBootModal } from "../";

const AddEquipmentButtons = () => {
  const [addSkimodalShow, setaddSkiModalShow] = React.useState(false);
  const [addSnowboardmodalShow, setaddSnowboardModalShow] =
    React.useState(false);
  const [addBootmodalShow, setaddBootModalShow] = React.useState(false);

  return (
    <Card id="equipmentCard" className="text-center bg-transparent">
      <Card.Body className="d-flex justify-content-between flex-column gap-3">
        <Card.Title style={{ color: "indigo" }}>
          What Equipment Item Would You Like To Add?
        </Card.Title>
        <Button
          className="btn btn-dark"
          style={{ color: "violet" }}
          variant="primary"
          onClick={() => setaddSkiModalShow(true)}
        >
          Add Skis
        </Button>
        <AddSkiModal
          className="btn btn-dark"
          style={{ color: "violet" }}
          show={addSkimodalShow}
          onHide={() => setaddSkiModalShow(false)}
        />
        <Button
          className="btn btn-dark"
          style={{ color: "violet" }}
          variant="primary"
          onClick={() => setaddSnowboardModalShow(true)}
        >
          Add SnowBoard
        </Button>
        <AddSnowboardModal
          show={addSnowboardmodalShow}
          onHide={() => setaddSnowboardModalShow(false)}
        />
        <Button
          className="btn btn-dark"
          style={{ color: "violet" }}
          variant="primary"
          onClick={() => setaddBootModalShow(true)}
        >
          Add Boots
        </Button>
        <AddBootModal
          show={addBootmodalShow}
          onHide={() => setaddBootModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
};

export default AddEquipmentButtons;
