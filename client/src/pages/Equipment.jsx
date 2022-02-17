import { Card, Button, ListGroup } from "react-bootstrap";
import AddSkiModal from "../Components/AddSkiModal";
import AddSnowboardModal from "../Components/AddSnowboard";
import AddBootModal from "../Components/AddBootModal";
import UpdateSkiModal from "../Components/UpdateSkiModal";
import UpdateSnowboardModal from "../Components/UpdateSnowboardModal";
import UpdateBootModal from "../Components/UpdateBootModal";
import React from "react";
import css from "../equipment.css";
import EquipmentList from "../Components/EquipmentList";
import { EquipmentSearch } from "../Components";


const Equipment = () => {
  const [addSkimodalShow, setaddSkiModalShow] = React.useState(false);
  const [addSnowboardmodalShow, setaddSnowboardModalShow] =
    React.useState(false);
  const [addBootmodalShow, setaddBootModalShow] = React.useState(false);
  const [updateSkimodalShow, setupdateSkiModalShow] = React.useState(false);
  const [updateSnowboardmodalShow, setupdateSnowboardModalShow] =
    React.useState(false);
  const [updateBootmodalShow, setupdateBootModalShow] = React.useState(false);

  return (
    <>
      <Card id="equipmentCard" className="text-center">
        <Card.Header>Currently Logged In: </Card.Header>
        <Card.Body className="d-flex justify-content-between flex-column gap-3">
          <Card.Title>What Equipment Item Would You Like To Add?</Card.Title>
          <Button variant="primary" onClick={() => setaddSkiModalShow(true)}>
            Add Skis
          </Button>
          <AddSkiModal
            show={addSkimodalShow}
            onHide={() => setaddSkiModalShow(false)}
          />
          <Button
            variant="primary"
            onClick={() => setaddSnowboardModalShow(true)}
          >
            Add SnowBoard
          </Button>
          <AddSnowboardModal
            show={addSnowboardmodalShow}
            onHide={() => setaddSnowboardModalShow(false)}
          />
          <Button variant="primary" onClick={() => setaddBootModalShow(true)}>
            Add Boots
          </Button>
          <AddBootModal
            show={addBootmodalShow}
            onHide={() => setaddBootModalShow(false)}
          />
        </Card.Body>
        <Card.Body>
          <Card.Title>View Current Inventory Below</Card.Title>
        </Card.Body>
      </Card>
      <Card id="equipmentCard" className="text-center">
        <Card.Body className="d-flex justify-content-between flex-column gap-3">
          <Card.Title>
            What piece of Equipment Would You Like To Update?
          </Card.Title>
          <Button variant="primary" onClick={() => setupdateSkiModalShow(true)}>
            Update Skis
          </Button>
          <AddSkiModal
            show={updateSkimodalShow}
            onHide={() => setupdateSkiModalShow(false)}
          />
          <Button
            variant="primary"
            onClick={() => setupdateSnowboardModalShow(true)}
          >
            Update SnowBoard
          </Button>
          <AddSnowboardModal
            show={updateSnowboardmodalShow}
            onHide={() => setupdateSnowboardModalShow(false)}
          />
          <Button
            variant="primary"
            onClick={() => setupdateBootModalShow(true)}
          >
            Update Boots
          </Button>
          <AddBootModal
            show={updateBootmodalShow}
            onHide={() => setupdateBootModalShow(false)}
          />
        </Card.Body>
      </Card>
      <EquipmentSearch />
    </>
  );
};

export default Equipment;
