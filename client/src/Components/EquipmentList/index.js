import React from "react";
import { useEquipmentContext } from "../../utils/EquipmentContext";
import { ListGroup } from "react-bootstrap";

const EquipmentList = () => {
  const { equipment } = useEquipmentContext();

  return (
    <>
      <span>Looks good here, make sure to run the tests!</span>
      <ul>
        {equipment.map((equipment) => (
          <li key={equipment.name}>
            {equipment.name} : {equipment.major}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EquipmentList;
