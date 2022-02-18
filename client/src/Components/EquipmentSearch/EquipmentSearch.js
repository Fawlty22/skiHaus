import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { ALLEQUIPMENT_QUERY } from '../../graphql/queries';
import { EquipmentSearchBar, EquipmentList } from '../'

const EquipmentSearch = ({ contractData, setContractData, setContractStep, contractStep }) => {
    const { data } = useQuery(ALLEQUIPMENT_QUERY)
    const equipmentData = data;
    const [categoryState, setCategoryState] = useState({category: ''})

    switch (categoryState.category) {
        case '':
            return (
                <div>
                    <EquipmentSearchBar
                        setCategoryState={setCategoryState}
                        categoryState={categoryState}
                    />
                </div>
            )
            
        default:
            return(
                <>
                    <EquipmentSearchBar
                        setCategoryState={setCategoryState}
                        categoryState={categoryState}
                    />
                    <EquipmentList
                        equipmentData={equipmentData}
                        categoryState={categoryState}
                        setContractData={setContractData}
                        contractData={contractData}
                        setContractStep={setContractStep}
                        contractStep={contractStep}
                    />
                </>
            )
    }
}

export default EquipmentSearch
