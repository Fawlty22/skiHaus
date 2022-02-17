import React, { useState } from "react";
// import { useEquipmentContext } from "../../utils/EquipmentContext";
import { ListGroup, Card } from "react-bootstrap";

const EquipmentList = ({ equipmentData, categoryState, setContractData, contractData }) => {
  let category
  let equipmentSelected
  category = categoryState.category.toLowerCase()
  // if(categoryState) {
  //   category = categoryState.category.toLowerCase()
  // }
  // else {
  //   category = 'all'
  // }
  // console.log(category)
  // if(category = "all") {
  //   equipmentSelected = equipmentData
  // }
  // else {
  //   equipmentSelected=equipmentData[category]
  // }

  equipmentSelected=equipmentData[category]

  console.log(category, equipmentSelected)
  // const { equipment } = useEquipmentContext();

  const handleEquipmentSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    const selectedEquipment = event.target.id
    setContractData({
      ...contractData,
      equipment: selectedEquipment
    })
    console.log(contractData)
  }

  return (
    <>
      <span>Select the {category} you would like to add</span>
      <ul>
        {equipmentSelected.map((equipment) => (
          <button 
            key={equipment._id} 
            id={equipment._id}
            onClick={handleEquipmentSubmit}>
              Brand : {equipment.brand}
              Model : {equipment.model}
          </button>
        ))}
      </ul>
    </>
  );
};

export default EquipmentList;