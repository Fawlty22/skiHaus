import React from "react";
import { Card, Button } from "react-bootstrap";
import { UpdateSkiModal, UpdateSnowboardModal, UpdateBootModal } from "..";

const UpdateEquipmentButtons = () => {
  const [updateSkimodalShow, setupdateSkiModalShow] = React.useState(false);
  const [updateSnowboardmodalShow, setupdateSnowboardModalShow] =
    React.useState(false);
  const [updateBootmodalShow, setupdateBootModalShow] = React.useState(false);

  return (
    <Card id="equipmentCard" className="text-center bg-transparent">
      <Card.Body className="d-flex justify-content-between flex-column gap-3">
        <Card.Title style={{ color: "indigo" }}>
          What piece of Equipment Would You Like To Update?
        </Card.Title>
        <Button
          className="btn btn-dark"
          style={{ color: "violet" }}
          variant="primary"
          onClick={() => setupdateSkiModalShow(true)}
        >
          Update Skis
        </Button>
        <UpdateSkiModal
          show={updateSkimodalShow}
          onHide={() => setupdateSkiModalShow(false)}
        />
        <Button
          className="btn btn-dark"
          style={{ color: "violet" }}
          variant="primary"
          onClick={() => setupdateSnowboardModalShow(true)}
        >
          Update SnowBoard
        </Button>
        <UpdateSnowboardModal
          show={updateSnowboardmodalShow}
          onHide={() => setupdateSnowboardModalShow(false)}
        />
        <Button
          className="btn btn-dark"
          style={{ color: "violet" }}
          variant="primary"
          onClick={() => setupdateBootModalShow(true)}
        >
          Update Boots
        </Button>
        <UpdateBootModal
          show={updateBootmodalShow}
          onHide={() => setupdateBootModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
};

export default UpdateEquipmentButtons;
