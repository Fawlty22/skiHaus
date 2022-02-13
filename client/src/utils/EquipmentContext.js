import React, { createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import { ALLEQUIPMENT_QUERY } from "../graphql/queries";

const EquipmentContext = createContext();

export const useEquipmentContext = () => useContext(EquipmentContext);

export const EquipmentProvider = ({ children }) => {
  const initialState = {
    equipment: [
      {
        id: 1,
        name: "Sayid",
        major: "Computer Science",
      },
      {
        id: 2,
        name: "Sun-Hwa",
        major: "Data Science",
      },
    ],
  };

  return (
    <EquipmentContext.Provider value={initialState}>
      {/* Render children passed from props */}
      {children}
    </EquipmentContext.Provider>
  );
};
