import React, { useState } from "react";
import { ListGroup, Card } from "react-bootstrap";
import { CREATE_CONTRACT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const EquipmentList = ({ equipmentData, categoryState, setContractData, contractData }) => {
  const [formState, setFormState] = useState({ skis: [], snowboards: [], boots: [] })

    if(!categoryState) {
      console.log('no categoryState')
      equipmentSelected = equipmentData

      const handleEquipmentSubmit = (event) => {
        console.log(event)
      }

      return (
        <>
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
    }

  const category = categoryState.category.toLowerCase()
  const equipmentSelected=equipmentData[category]
  console.log(equipmentData, category)

  const handleEquipmentSubmit = (event) => {
    event.preventDefault();
    const selectedEquipment = event.target.id
    const categoryArray = formState[category]
    const updatedCategoryArray = [...categoryArray, selectedEquipment]
    formState[category] = updatedCategoryArray
    setFormState({
      ...formState
    })
  }

  const handleContractSubmit = async (event) => {
    event.preventDefault();
    await setContractData({
      ...contractData,
      equipment: {...formState}
    })
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
      <button onClick={handleContractSubmit}>Submit Contract</button>
    </>
  );
};

export default EquipmentList;