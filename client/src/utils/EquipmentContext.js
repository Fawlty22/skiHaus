import React, { createContext, useContext } from "react";
// import { gql, useQuery } from "@apollo/client";
// import { ALLEQUIPMENT_QUERY } from "../graphql/queries";


const EquipmentContext = createContext();

export const useEquipmentContext = () => useContext(EquipmentContext);

export const EquipmentProvider = ({ children }) => {
  // const { allEquipment } = useQuery(ALLEQUIPMENT_QUERY);

  // const equipmentList = async function () {
  //   try {
  //     const newEquipmentList = await allEquipment({});
  //     equipment = newEquipmentList;
  //     return equipment;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // let equipment = [equipmentList()]

  return (
    <EquipmentContext.Provider value={children}>
      {/* Render children passed from props */}
      {children}
    </EquipmentContext.Provider>
  );
};
