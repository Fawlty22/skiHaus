import React from "react";
import { Redirect } from "react-router-dom";
import Auth from "../utils/auth";
import {
  EquipmentSearch,
  AddEquipmentButtons,
  UpdateEquipmentButtons,
} from "../components";

const Equipment = () => {
  let employee = Auth.getProfile();
    // redirect to login if error in a query
    if (!employee) {
      return <Redirect to={"/login"} />
    }
  return (
    <>
      <AddEquipmentButtons />
      <UpdateEquipmentButtons />
      {/* <EquipmentSearch /> */}
    </>
  );
};

export default Equipment;
