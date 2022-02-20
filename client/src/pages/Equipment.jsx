import React from "react";
import css from "../equipment.css";
import {
  EquipmentSearch,
  AddEquipmentButtons,
  UpdateEquipmentButtons,
} from "../Components";

const Equipment = () => {
  return (
    <>
      <AddEquipmentButtons />
      <UpdateEquipmentButtons />
      {/* <EquipmentSearch /> */}
    </>
  );
};

export default Equipment;
